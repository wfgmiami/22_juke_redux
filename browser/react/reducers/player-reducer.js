import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from '../constants';

export const initialPlayerState = {
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0
};


export default ( state = initialPlayerState, action ) => {
  const newState = Object.assign({}, state);

  switch( action.type ){
    case START_PLAYING:
      newState.isPlaying = true;
      break;
    case STOP_PLAYING:
      newState.isPlaying = false;
      break;
    case SET_CURRENT_SONG:
      newState.currentSong = action.currentSong;
      break;
    case SET_LIST:
      newState.currentSongList = action.currentSongList;
      break;
    case SET_PROGRESS:
      newState.progress = action.progress;
      break;
    default:
      return state;

  }

  return newState;
}

