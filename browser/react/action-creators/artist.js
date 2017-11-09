import { RECEIVE_ARTIST } from '../constants';
import axios from 'axios';
import { convertSong, convertAlbums } from '../utils';

const setArtist = ( artist ) => {
  return {
    type: RECEIVE_ARTIST,
    artist
  }
}

const fetchArtist = ( artistId ) => dispatch => {

  Promise
  .all([
    axios.get(`/api/artists/${artistId}`),
    axios.get(`/api/artists/${artistId}/albums`),
    axios.get(`/api/artists/${artistId}/songs`)
  ])
  .then( res => res.map(r => r.data))
  .then( data => {
    let [ artist, albums, songs ] = data;
    songs = songs.map(convertSong);
    albums = convertAlbums(albums);
    artist.albums = albums;
    artist.songs = songs;
    dispatch( setArtist( artist ))
  })

}

export default fetchArtist;
