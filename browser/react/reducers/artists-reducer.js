import { RECEIVE_ARTISTS } from '../constants';

const artistsReducer = (state=[], action) => {

  switch(action.type){
    case RECEIVE_ARTISTS:
      return Object.assign({}, state, { artists: action.artists })
    default:
      return state;
  }
}

export default artistsReducer;
