import { RECEIVE_PLAYLISTS } from '../constants';


export default ( state = [], action) => {

  switch( action.type ){
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, { playlists: action.playlists })
    default:
      return state;
  }
}
