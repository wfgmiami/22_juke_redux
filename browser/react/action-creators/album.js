import { RECEIVE_ALBUM } from '../constants';
import axios from 'axios';
import { convertAlbum } from '../utils';

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

    dispatch(setAlbum( convertAlbum( album )));
  })
}

export default fetchAlbum;
