import { RECEIVE_ALBUM } from '../constants';

export default albumReducer = ( state = {}, action ) => {

  switch ( action.type ){
    case RECEIVE_ALBUM:
      return Object.assign( {}, state, { album: action.album })
    default:
      return state;
  }

}
