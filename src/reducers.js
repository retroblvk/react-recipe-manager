import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {
  CHANGE_TITLE_FIELD,
  CHANGE_TAGS_FIELD,
  CHANGE_SERVINGS_FIELD,
  CHANGE_INGREDIENTS_FIELD,
  CHANGE_INSTRUCTIONS_FIELD,
  CHANGE_PREP_TIME_FIELD,
  CHANGE_COOK_TIME_FIELD,
  CHANGE_READY_IN_FIELD,
  CHANGE_DESCRIPTION_FIELD,
  CHANGE_IMG_FIELD,
  CHANGE_EMAIL_FIELD,
  CHANGE_PASSWORD_FIELD,
  CHANGE_CONFIRM_PASSWORD_FIELD,
  REQUEST_RECIPE_PENDING,
  REQUEST_RECIPE_SUCCESS,
  REQUEST_RECIPE_FAILED,
  REQUEST_USER_PENDING,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILED,
} from './constants';

const initialStateInputFields = {
  titleField: '',
  tagsField: [],
  servingsField: '',
  ingredientsField: '',
  instructionsField: '',
  prepTimeField: '',
  cookTimeField: '',
  readyInField: '',
  descriptionField: '',
  imgField: {},
};

const recipeFields = (state = initialStateInputFields, action = {}) => {
  switch (action.type) {
    case CHANGE_TITLE_FIELD:
      return Object.assign({}, state, { titleField: action.payload });
    case CHANGE_TAGS_FIELD:
      return Object.assign({}, state, { tagsField: action.payload });
    case CHANGE_SERVINGS_FIELD:
      return Object.assign({}, state, { servingsField: action.payload });
    case CHANGE_INGREDIENTS_FIELD:
      return Object.assign({}, state, { ingredientsField: action.payload });
    case CHANGE_INSTRUCTIONS_FIELD:
      return Object.assign({}, state, { instructionsField: action.payload });
    case CHANGE_PREP_TIME_FIELD:
      return Object.assign({}, state, { prepTimeField: action.payload });
    case CHANGE_COOK_TIME_FIELD:
      return Object.assign({}, state, { cookTimeField: action.payload });
    case CHANGE_READY_IN_FIELD:
      return Object.assign({}, state, { readyInField: action.payload });
    case CHANGE_DESCRIPTION_FIELD:
      return Object.assign({}, state, { descriptionField: action.payload });
    case CHANGE_IMG_FIELD:
      return Object.assign({}, state, { imgField: action.payload });
    default:
      return state;
  }
};

const initialStateRequestRecipe = {
  recipe: {},
  isPending: false,
  err: {},
};

export const requestRecipe = (
  state = initialStateRequestRecipe,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_RECIPE_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_RECIPE_SUCCESS:
      return Object.assign({}, state, {
        recipe: action.payload,
        isPending: false,
        err: {},
      });
    case REQUEST_RECIPE_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        err: action.payload,
      });
    default:
      return state;
  }
};

const initialStateUserFields = {
  emailField: '',
  passwordField: '',
  confirmPasswordField: '',
};

const userFields = (state = initialStateUserFields, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL_FIELD:
      return Object.assign({}, state, { emailField: action.payload });
    case CHANGE_PASSWORD_FIELD:
      return Object.assign({}, state, { passwordField: action.payload });
    case CHANGE_CONFIRM_PASSWORD_FIELD:
      return Object.assign({}, state, { confirmPasswordField: action.payload });
    default:
      return state;
  }
};

// User requests
const initialStateRequestUser = {
  user: {},
  isPending: false,
  err: {},
};

export const requestUser = (state = initialStateRequestUser, action = {}) => {
  switch (action.type) {
    case REQUEST_USER_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload,
        isPending: false,
        err: {},
      });
    case REQUEST_USER_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        err: action.payload,
      });
    default:
      return state;
  }
};

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    recipeFields,
    requestRecipe,
    userFields,
    requestUser,
  });

export default createRootReducer;
