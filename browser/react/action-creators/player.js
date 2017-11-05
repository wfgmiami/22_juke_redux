import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from '../constants';
import { skip } from '../utils';

import AUDIO from '../audio';

export const play = () => dispatch => {
    AUDIO.play()
    dispatch( startPlaying() )
}

export const pause = () => dispatch => {

  AUDIO.pause();
  dispatch(stopPlaying());
}


export const load = (currentSong, currentSongList) => {
  return ( dispatch ) => {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    dispatch( setCurrentSong( currentSong ));
    dispatch( setCurrentList( currentSongList ));
  }
}

export const startSong = (song, list) => {
  return (dispatch) => {
    dispatch(pause());
    dispatch(load(song, list));
    dispatch(play());
  }
}

export const toggle = () => (dispatch, getState) => {
  const { isPlaying } = getState().player

  if(isPlaying) dispatch( pause() )
  else dispatch( play() )
}

export const toggleOne = (selectedSong, selectedSongList) => (dispatch, getState) => {
  const { currentSong } = getState().player;

  if( selectedSong.id !== currentSong.id ){
    dispatch(startSong( selectedSong, selectedSongList ));
  }else{
    dispatch( toggle() )
  }
}

export const next = () => ( dispatch, getState ) => {
  dispatch( startSong(...skip(1, getState().player )));
}

export const prev = () => (dispatch, getState ) => {
  dispatch( startSong(...skip(-1, getState().player )))
}

export const setProgress = (progress) => dispatch => {
  dispatch( syncSetProgress( progress ));
}

export const startPlaying = () => {
  return {
    type: START_PLAYING
  }
}

export const stopPlaying = () => {
  return {
    type: STOP_PLAYING
  }
}

export const setCurrentSong = ( currentSong ) => {
  return {
    type: SET_CURRENT_SONG,
    currentSong
  }
}

export const setCurrentList = ( currentSongList ) => {
  return {
    type: SET_LIST,
    currentSongList
  }
}

export const syncSetProgress = (progress) => {
  return {
    type: 'SET_PROGRESS',
    progress
  }
}

