import { RECEIVE_ARTISTS } from '../constants';
import axios from 'axios';

const setArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  }
}


const fetchArtists = () => dispatch => {
  axios.get('/api/artists/')
  .then(response => response.data)
  .then(artists => {

    dispatch(setArtists(artists))
  })

}

export default fetchArtists;
