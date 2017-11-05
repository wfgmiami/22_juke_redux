import { RECEIVE_PLAYLISTS } from '../constants';
import axios from 'axios';

const setPlaylists = (playlists) => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  }
}

const fetchPlaylists = () => dispatch => {
  axios.get('/api/playlists')
  .then( response => response.data )
  .then( playlists => {

    dispatch( setPlaylists( playlists ))
  })
}

export default fetchPlaylists;
