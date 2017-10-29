import React, { Component } from 'react';
import store from '../store';
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';
import Lyrics from '../components/Lyrics';
import axios from 'axios';

export default class extends Component{
  constructor(){
    super();
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState())
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe( ()=>{
      this.setState(store.getState())
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  handleArtistInput(artist){
    this.setState({ artistQuery: artist})
  }

  handleSongInput(song){
    this.setState({ songQuery: song })
  }

  // handleSubmit(event){
  //   event.preventDefault();
  //   if(this.state.artistQuery && this.state.songQuery){
  //     axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
  //     .then( response => response.data)
  //     .then( lyrics => {
  //         store.dispatch(setLyrics(lyrics.lyric))
  //      })
  //   }
  // }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.artistQuery && this.state.songQuery){
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery))
    }
  }

  render(){

    return(
      < Lyrics text = { this.state.lyrics.text} artistQuery={this.state.artistQuery } songQuery = { this.state.songQuery } handleSubmit={ this.handleSubmit } handleArtistInput = { this.state.handleArtistInput } handleSongInput = { this.state.handleSongInput} setSong={this.handleSongInput} setArtist={this.handleArtistInput} />
    )

  }

}


