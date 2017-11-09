import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

import initialState from '../initialState';
import AUDIO from '../audio';

import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

import store from '../store';
import {toggle, toggleOne, load, startSong, play, pause, next, prev, setProgress} from '../action-creators/player';


import fetchAlbum from '../action-creators/album';
import fetchArtist from '../action-creators/artist';
import { fetchSelectedPlaylist, postSongToPlaylist } from '../action-creators/selectedPlaylist.js';
import { postPlaylists } from '../action-creators/playlists';

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({}, initialState, store.getState())

    // this.toggle = this.toggle.bind(this);
    // this.toggleOne = this.toggleOne.bind(this);
    // this.next = this.next.bind(this);
    // this.prev = this.prev.bind(this);
    // this.selectAlbum = this.selectAlbum.bind(this);
    // this.selectArtist = this.selectArtist.bind(this);
    // this.setProgress = this.setProgress.bind(this);
    // this.selectPlaylist = this.selectPlaylist.bind(this);
    // this.addPlaylist = this.addPlaylist.bind(this);
    this.loadSongs = this.loadSongs.bind(this);
    // this.addSongToPlaylist = this.addSongToPlaylist.bind(this);

  }

  componentDidMount () {

    AUDIO.addEventListener('ended', () =>
      this.next());
    AUDIO.addEventListener('timeupdate', () =>
      this.setProgress(AUDIO.currentTime / AUDIO.duration));

    this.unsubscribe = store.subscribe( ()=> {
      this.setState(store.getState())
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  play () {
    store.dispatch(play())
  }

  pause () {
    store.dispatch(pause());
  }

  load (currentSong, currentSongList) {
    store.dispatch(load(currentSong, currentSongList))
  }

  startSong (song, list) {
    store.dispatch(startSong(song,list));
  }

  toggleOne (selectedSong, selectedSongList) {
    // console.log('in toggle',selectedSong)
    store.dispatch(toggleOne(selectedSong, selectedSongList))
  }

  toggle () {
    store.dispatch(toggle());
  }

  next () {
    store.dispatch(next());
  }

  prev () {
    store.dispatch(prev());
  }

  setProgress (progress) {
    store.dispatch(setProgress(progress));
  }

  selectAlbum (albumId) {
    store.dispatch( fetchAlbum( albumId ) )
  }


  selectArtist (artistId) {
    store.dispatch( fetchArtist( artistId ) )
  }

  addPlaylist (playlistName) {
    store.dispatch( postPlaylists( playlistName ));
    // axios.post('/api/playlists', { name: playlistName })
    //   .then(res => res.data)
    //   .then(playlist => {
    //     this.setState({
    //       playlists: [...this.state.playlists, playlist]
    //     }, () => {
    //       hashHistory.push(`/playlists/${playlist.id}`)
    //     });
    //   });
  }

  selectPlaylist (playlistId) {
    store.dispatch( fetchSelectedPlaylist( playlistId ));

  }

  loadSongs (songs) {
    axios.get('/api/songs')
      .then(res => res.data)
      .then(songs => {
        this.setState({
          songs: songs
        });
      });
  }

  addSongToPlaylist (playlistId, songId) {

    store.dispatch( postSongToPlaylist( playlistId, songId ) )

    // return axios.post(`/api/playlists/${playlistId}/songs`, {
    //   id: songId
    // })
    //   .then(res => res.data)
    //   .then(song => {
    //     const selectedPlaylist = this.state.selectedPlaylist;
    //     const songs = this.state.selectedPlaylist.songs;
    //     const newSongs = [...songs, convertSong(song)];
    //     const newSelectedPlaylist = Object.assign({}, selectedPlaylist, {
    //       songs: newSongs
    //     });

    //     this.setState({
    //       selectedPlaylist: newSelectedPlaylist
    //     });
    //   });
  }

  render () {
    const props = Object.assign({}, this.state, {
      toggleOne: this.toggleOne,
      toggle: this.toggle,
      selectAlbum: this.selectAlbum,
      selectArtist: this.selectArtist,
      addPlaylist: this.addPlaylist,
      selectPlaylist: this.selectPlaylist,
      loadSongs: this.loadSongs,
      addSongToPlaylist: this.addSongToPlaylist
    });

    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar playlists={this.state.playlists} />
        </div>
        <div className="col-xs-10">
        {
          this.props.children && React.cloneElement(this.props.children, props)
        }
        </div>
        <Player
          currentSong={this.state.player.currentSong}
          currentSongList={this.state.player.currentSongList}
          isPlaying={this.state.player.isPlaying}
          progress={this.state.player.progress}
          next={this.next}
          prev={this.prev}
          toggle={this.toggle}
        />
      </div>
    );
  }
}
