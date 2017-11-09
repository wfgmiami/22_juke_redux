import { RECEIVE_ARTIST } from '../constants';

export default (state={}, action) => {

  switch( action.type){
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { selectedArtist: action.artist })
    default:
      return state;
  }
}

