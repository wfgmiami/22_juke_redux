import { RECEIVE_ALBUM } from '../constants';

export default ( state = {}, action ) => {

  switch ( action.type ){
    case RECEIVE_ALBUM:
      return Object.assign( {}, state, { selectedAlbum: action.album })
    default:
      return state;
  }

}
