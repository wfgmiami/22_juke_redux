import { ADD_SONG_TO_PLAYLIST } from '../constants';
import { ADD_TO_PLAYLIST } from '../constants';

const newPlaylist = ( playlist ) => {
  return {
    type: ADD_TO_PLAYLIST,
    playlist
  }
}

const newSongPlaylist = ( song ) => {
  return {
    type: ADD_SONG_TO_PLAYLIST,
    song
  }
}

const addPlaylist = ( playlist ) => dispatch => {
  dispatch( newPlaylist( playlist ) )
}

const addSongPlaylist = ( song ) => dispatch => {
  dispatch( newSongPlaylist( song ) )
}


export { addPlaylist, addSongPlaylist };
