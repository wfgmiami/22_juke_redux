import React, { Component } from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { setLyrics, fetchLyrics} from '../action-creators/lyrics';

class LyricsContainer extends Component{
  constructor(props){
    super(props);
    this.state = Object.assign({}, {
      artistQuery:'',
      songQuery:'',
    }, store.getState()
    )

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe( () => {
      this.setState(store.getState);
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  handleArtistInput(artistQuery){
    this.setState({ artistQuery })
  }

  handleSongInput(songQuery){
    this.setState({ songQuery })
  }

  handleSubmit(event){
    event.preventDefault();
    if( this.state.artistQuery && this.state.songQuery ){
      store.dispatch( fetchLyrics( this.state.artistQuery, this.state.songQuery ));
    }

  }

  render(){
console.log('..this.state.lyrics.text', this.state.lyrics.text)
    return(

      <Lyrics
        text={this.state.lyrics.text}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default LyricsContainer;
