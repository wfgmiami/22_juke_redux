import { RECEIVE_PLAYLISTS } from '../constants';
import axios from 'axios';
import { convertSong } from '../utils';

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

const postPlaylists = ( playlistName ) => (dispatch, getState) => {
  axios.post('/api/playlists', { name: playlistName })
  .then(res => res.data)
  .then( playlist => {
    let playlists = getState().playlists.playlists;
    playlists = [...playlists, playlist];
    dispatch( setPlaylists( playlists ))
  });

}


export { fetchPlaylists, postPlaylists };
