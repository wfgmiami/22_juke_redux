import { RECEIVE_ALBUMS } from '../constants';

const initialState = [];

export default (state=initialState, action ) => {

  switch( action.type ){
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, { albums: action.albums });
    default:
      return state;
  }

}

