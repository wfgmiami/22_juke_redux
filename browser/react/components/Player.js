import React, { Component } from 'react';
import store from '../store';

class Player extends Component{
  constructor(props){
    super();
    this.state = {
      progress: store.getState().player.progress
    }
  }
  // const currentSong = props.currentSong;
  // const currentSongList = props.currentSongList;
  // const isPlaying = props.isPlaying;
  // const progress = props.progress;
  // const prev = props.prev;
  // const toggle = props.toggle;
  // const next = props.next;

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState( {progress: store.getState().player.progress }))
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const currentSong = this.props.currentSong;
    const currentSongList = this.props.currentSongList;
    const isPlaying = this.props.isPlaying;
    const prev = this.props.prev;
    const toggle = this.props.toggle;
    const next = this.props.next;
    const progress = this.state.progress;
console.log('IN PLAYER CURRENTSONG', currentSong)
    return (
      <footer>
        <div style={!currentSong.id ? {display: 'none'} : null}>
          <div className="pull-left">
            <button className="btn btn-default" onClick={prev}>
              <span className="glyphicon glyphicon-step-backward"></span>
            </button>
            <button className="btn btn-default" onClick={toggle}>
              <span className={isPlaying ? 'glyphicon glyphicon-pause' : 'glyphicon glyphicon-play'}></span>
            </button>
            <button className="btn btn-default" onClick={next}>
              <span className="glyphicon glyphicon-step-forward"></span>
            </button>
          </div>
          <div className="bar">
            <div className="progress">
              <div className="progress-bar" style={{width: `${progress * 100}%`}}></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Player;
