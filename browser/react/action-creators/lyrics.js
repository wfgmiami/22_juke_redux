import { SET_LYRICS } from '../constants';
import axios from 'axios';


export const setLyrics = ( lyrics ) => {

  return {
    type: SET_LYRICS,
    lyrics
  };
};

export const fetchLyrics = ( artist, song ) => {
  return ( dispatch, getState ) => {
    axios.get(`api/lyrics/${artist}/${song}`)
    .then( response => response.data.lyrics )
    .then( lyrics => {
      dispatch(setLyrics(lyrics))
    })
  }
}
