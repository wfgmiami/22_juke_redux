import React, { Component } from 'react';
import store from '../store';

class Songs extends Component{


  render(){

    // console.log('....songs this.props ', this.props)
    const currentSong = this.props.player.currentSong;
    const isPlaying = this.props.player.isPlaying;
    const toggle = this.props.toggleOne;

    const playlist = this.props.selectedPlaylist.selectedPlaylist ?
    this.props.selectedPlaylist.selectedPlaylist : '';

    const songs = ( this.props.selectedArtist.selectedArtist && !playlist ) ? this.props.selectedArtist.selectedArtist.songs :  ( !this.props.selectedArtist.selectedArtist && playlist ) ? this.props.selectedPlaylist.selectedPlaylist.songs : this.props.songs;;

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
