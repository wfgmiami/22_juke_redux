import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from '../constants';
import AUDIO from '../audio';
import { skip } from '../utils';

export const setProgress = (progress) => {
  return {
      type: SET_PROGRESS,
      progress
  }
}

const startPlaying = ()=>{
  return {
    type: START_PLAYING
  }
}

const stopPlaying =()=>{
  return {
    type: STOP_PLAYING,
  }
}

const setCurrentSong = (currentSong) => {
  return {
    type: SET_CURRENT_SONG,
    currentSong
  }
}

const setCurrentSongList = (currentSongList) => {
  return {
    type: SET_LIST,
    currentSongList
  }
}

export const play = () => (dispatch) => {
  AUDIO.play()
  dispatch(startPlaying())
}

export const pause = () => (dispatch) => {
  AUDIO.pause();
  dispatch(stopPlaying());
}

export const load = (currentSong, currentSongList) => (dispatch,getState) => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSong(currentSong));
  dispatch(setCurrentSongList(currentSongList));
}

export const toggle = () => (dispatch,getState) => {
  const { isPlaying } = getState().player;
  if (isPlaying) dispatch(pause());
  else dispatch(play());
}

export const startSong = (song, list) => (dispatch) => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
}

export const toggleOne = (selectedSong, selectedSongList) => (dispatch,getState) => {
  const { currentSong } = getState().player;
  console.log('CURRENT SONG !== SELECTEDSONG',currentSong.id !== selectedSong.id)
  if(selectedSong.id !== currentSong.Id) dispatch(startSong(selectedSong, selectedSongList));
  else dispatch(toggle())
}

export const next = () => (dispatch,getState) => {
  dispatch(startSong(...skip(1,getState().player)))
}

export const prev = () => (dispatch,getState) => {
  dispatch(startSong(...skip(-1,getState().player)))
}

