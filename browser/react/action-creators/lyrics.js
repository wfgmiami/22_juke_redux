import {SET_LYRICS} from '../constants';
import axios from 'axios';

export const setLyrics = function(text) {
  return {
    type: SET_LYRICS,
    lyric: text
  };

}

//setLyrics - syncronous action creator - return a JS object

//fetchLyrics -asynch action creator(enabled by thunkMiddleware)
//async action creator return a function that can expect to receive 2 arguments
//the store dispatch method and the store's getState method
//The funciton get invoked by the middleware and it returns an action/object
//theObject={type:'do', payload} that gets passed: store.dispatch(theObject)

export const fetchLyrics = function(artist, song){
  return function(dispatch,getState){
    var test = axios.get(`api/lyrics/${artist}/${song}`)
    .then(res => dispatch(setLyrics(res.data.lyric)))
  }

}

const fetchAlbumsFromServer = () => {
  return (dispatch) => {
    axios.get('/api/albums')
    .then(res => res.data)
    .then(albums => dispatch(receiveAlbumsFromServer(albums)));
  }
}

const playSong = songId => {
  return (dispatch) => {
    audio.play();
    dispatch(selectSong(songId));
  }
}

const doSeveralThings = (stuffId, thingsId) => {
  return (dispatch) => {
    dispatch(doStuff(stuffId));
    dispatch(doThing(thingId))
  }
}
