import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {
  CHANGE_TITLE_FIELD,
  CHANGE_INGREDIENTS_FIELD,
  CHANGE_INSTRUCTIONS_FIELD,
} from './constants';

const initialState = {
  titleField: '',
  ingredientsField: '',
  instructionsField: '',
};

const inputFields = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TITLE_FIELD:
      return Object.assign({}, state, { titleField: action.payload });
    case CHANGE_INGREDIENTS_FIELD:
      return Object.assign({}, state, { ingredientsField: action.payload });
    case CHANGE_INSTRUCTIONS_FIELD:
      return Object.assign({}, state, { instructionsField: action.payload });
    default:
      return state;
  }
};

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    inputFields,
  });

export default createRootReducer;
