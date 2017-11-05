import { RECEIVE_ALBUMS } from '../constants';
import { convertAlbums } from '../utils';
import axios from 'axios';

const setAlbums = (albums) => {

  return {
    type: RECEIVE_ALBUMS,
    albums
  }
}

const fetchAlbums = () => {

  return (dispatch, getState) => {
    axios.get('/api/albums/')
    .then( response => response.data )
    .then( albums => convertAlbums(albums) )
    .then( convertedAlbums => {
      dispatch(setAlbums(convertedAlbums));
    })
  }
}

export default fetchAlbums;

