import {
  CHANGE_TITLE_FIELD,
  CHANGE_INGREDIENTS_FIELD,
  CHANGE_INSTRUCTIONS_FIELD,
} from './constants';

export const setTitleField = (text) => ({
  type: CHANGE_TITLE_FIELD,
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
