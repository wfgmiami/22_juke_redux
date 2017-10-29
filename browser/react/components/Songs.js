import React, { Component } from 'react';
import store from '../store';

class Songs extends Component{
  constructor(props){
    super();
    this.state = { isPlaying: store.getState().player.isPlaying }
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState({ isPlaying: store.getState().player.isPlaying }))
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const songs = this.props.songs;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggle = this.props.toggleOne;
    //console.log('songs, store.isPlaing', isPlaying);
    return (
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Artists</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {
            songs && songs.map(song => (
              <tr key={song.id}>
                <td>
                  <button className="btn btn-default btn-xs" onClick={() => toggle(song, songs)}>
                    <span className={song.id === currentSong.id && isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}></span>
                  </button>
                </td>
                <td>{ song.name }</td>
                <td>
                  <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
                </td>
                <td>{ song.genre }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );

  }

}

export default Songs;
