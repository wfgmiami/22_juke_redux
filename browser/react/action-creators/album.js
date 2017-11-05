import { RECEIVE_ALBUM } from '../constants';
import axios from 'axios';

const setAlbum = ( album ) => {
  return {
    type: RECEIVE_ALBUM,
    album
  }
}

const fetchAlbum = ( albumId ) => dispatch => {
  axios.get(`/api/albums/${albumId}`)
  .then( res => res.data )
  .then( album => {
    dispatch(setAlbum( album ));
  })
}

export default fetchAlbum;
