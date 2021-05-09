import Axios from 'axios';
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

export const setTitleField = (text) => ({
  type: CHANGE_TITLE_FIELD,
  payload: text,
});

export const setTagsField = (text) => ({
  type: CHANGE_TAGS_FIELD,
  payload: text,
});

export const setServingsField = (text) => ({
  type: CHANGE_SERVINGS_FIELD,
  payload: text,
});

export const setIngredientsField = (text) => ({
  type: CHANGE_INGREDIENTS_FIELD,
  payload: text,
});

export const setInstructionsField = (text) => ({
  type: CHANGE_INSTRUCTIONS_FIELD,
  payload: text,
});

export const setPrepTimeField = (text) => ({
  type: CHANGE_PREP_TIME_FIELD,
  payload: text,
});

export const setCookTimeField = (text) => ({
  type: CHANGE_COOK_TIME_FIELD,
  payload: text,
});

export const setReadyInField = (text) => ({
  type: CHANGE_READY_IN_FIELD,
  payload: text,
});

export const setDescriptionField = (text) => ({
  type: CHANGE_DESCRIPTION_FIELD,
  payload: text,
});

export const setImgField = (text) => ({
  type: CHANGE_IMG_FIELD,
  payload: text,
});

export const setEmailField = (text) => ({
  type: CHANGE_EMAIL_FIELD,
  payload: text,
});

export const setPasswordField = (text) => ({
  type: CHANGE_PASSWORD_FIELD,
  payload: text,
});

export const setConfirmPasswordField = (text) => ({
  type: CHANGE_CONFIRM_PASSWORD_FIELD,
  payload: text,
});

export const postUser = (state) => (dispatch) => {
  dispatch({ type: REQUEST_USER_PENDING });
  const user = (({ emailField, passwordField, confirmPasswordField }) => ({
    emailField,
    passwordField,
    confirmPasswordField,
  }))(state);
  let emptyField = false;
  const emptyFields = {
    message: 'Please make sure to fill out all the fields.',
    emailField: false,
    passwordField: false,
    confirmPasswordField: false,
  };
  // Loop through recipes to see if theirs an empty field.
  for (const property in user) {
    if (user[property].length === 0) {
      emptyFields[property] = !emptyFields[property];
      emptyField = true;
    }
  }
  if (emptyField) {
    const err = emptyFields;
    dispatch({ type: REQUEST_USER_FAILED, payload: err });
  } else {
    const data = new FormData();
    data.append('user', JSON.stringify(user));
    Axios.post('http://localhost:3001/user', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        dispatch({
          type: REQUEST_USER_SUCCESS,
          payload: JSON.parse(response.data.user),
        });
      })
      .catch((err) => {
        dispatch({ type: REQUEST_USER_FAILED, payload: err });
      });
  }
};

export const postRecipe = (state) => (dispatch) => {
  dispatch({ type: REQUEST_RECIPE_PENDING });
  // Take out the recipe fields
  const recipe = (({
    titleField,
    tagsField,
    servingsField,
    ingredientsField,
    instructionsField,
    prepTimeField,
    cookTimeField,
    readyInField,
    descriptionField,
  }) => ({
    titleField,
    tagsField,
    servingsField,
    ingredientsField,
    instructionsField,
    prepTimeField,
    cookTimeField,
    readyInField,
    descriptionField,
  }))(state);
  // extract image field
  const { imgField } = state;
  let emptyField = false;
  const emptyFields = {
    message: 'Please make sure to fill out all the fields.',
    titleField: false,
    tagsField: false,
    servingsField: false,
    ingredientsField: false,
    instructionsField: false,
    prepTimeField: false,
    cookTimeField: false,
    readyInField: false,
    descriptionField: false,
    imgField: false,
  };
  // Loop through recipes to see if theirs an empty field.
  for (const property in recipe) {
    if (recipe[property].length === 0) {
      emptyFields[property] = !emptyFields[property];
      emptyField = true;
    }
  }
  if (!imgField.name) {
    emptyFields.imgField = true;
  }
  if (emptyField) {
    const err = emptyFields;
    dispatch({ type: REQUEST_RECIPE_FAILED, payload: err });
  } else {
    const data = new FormData();
    data.append('img', imgField, imgField.name);
    data.append('recipe', JSON.stringify(recipe));
    Axios.post('http://localhost:3001/recipe', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        dispatch({ type: REQUEST_RECIPE_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: REQUEST_RECIPE_FAILED, payload: err });
      });
  }
};

export const getRecipe = (state) => (dispatch) => {
  dispatch({ type: REQUEST_RECIPE_PENDING });
  Axios.get('http://localhost:3001/recipe')
    .then((response) => {
      dispatch({ type: REQUEST_RECIPE_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_RECIPE_FAILED, payload: err });
    });
};
