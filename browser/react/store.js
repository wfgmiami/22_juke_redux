import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
})

// export default createStore(reducer,composeEnhancers(applyMiddleware(createLogger,thunkMiddleware)))



export default createStore(reducer,applyMiddleware(thunkMiddleware))
