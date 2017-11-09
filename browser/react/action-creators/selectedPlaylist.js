import { RECEIVE_PLAYLIST } from '../constants';
import { ERROR_RECEIVE_PLAYLIST } from '../constants';

import axios from 'axios';
import { convertSong } from '../utils';

const setSelectedPlaylist = ( playlist ) => {
  return {
    type:RECEIVE_PLAYLIST,
    playlist
  }
}

const setSelectedPlaylistError = ( error ) => {
  return {
    type:ERROR_RECEIVE_PLAYLIST,
    error
  }
}

const fetchSelectedPlaylist = (playlistId) => dispatch => {
  axios.get(`/api/playlists/${playlistId}`)
  .then(res => res.data)
  .then(playlist => {
    playlist.songs = playlist.songs.map(convertSong);
    dispatch( setSelectedPlaylist( playlist ) );
  });
}

const postSongToPlaylist = ( playlistId, songId) => (dispatch, getState) => {
  let err = '';

  axios.post(`/api/playlists/${playlistId}/songs`, { id: songId })
  .then(res => res.data)
  .then(song => {
    let playlist = getState().selectedPlaylist.selectedPlaylist;
    const songs = playlist.songs;
    const newSongs = [...songs, convertSong(song)];
    playlist.songs = newSongs;
    dispatch( setSelectedPlaylist( playlist ));
  })
  .catch( error => {
    dispatch( setSelectedPlaylist( error ));
  })
}

export { fetchSelectedPlaylist, postSongToPlaylist };
