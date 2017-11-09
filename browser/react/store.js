import { createStore, applyMiddleware, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import albumsReducer from './reducers/albums-reducer';
import artistsReducer from './reducers/artists-reducer';
import playlistsReducer from './reducers/playlists-reducer';
import albumReducer from './reducers/album-reducer';
import artistReducer from './reducers/artist-reducer';
import selectedPlaylistReducer from './reducers/selectedPlaylist-reducer';
// import addToPlaylistReducer from './reducers/addToPlaylist-reducer.js';

import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';



const combinedReducers = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer,
  selectedAlbum: albumReducer,
  selectedArtist: artistReducer,
  selectedPlaylist: selectedPlaylistReducer
  // addToPlaylist: addToPlaylistReducer
})

// const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(loggerMiddleware, thunkMiddleware));


const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware( thunkMiddleware));

export default store;
