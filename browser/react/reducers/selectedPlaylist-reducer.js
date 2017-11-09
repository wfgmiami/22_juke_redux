import { RECEIVE_PLAYLIST } from '../constants';
import { ERROR_RECEIVE_PLAYLIST } from '../constants';

export default (state={}, action) => {

  switch( action.type ){

    case RECEIVE_PLAYLIST:
      return Object.assign( {}, state, { selectedPlaylist: action.playlist });
    case ERROR_RECEIVE_PLAYLIST:
      return Object.assign( {}, state, { errorSelectedPlaylist: action.error });
    default:
      return state;
  }
}
