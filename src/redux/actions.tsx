import * as constants from './constants';

export const todoAddHandler = (text: string) => ({
  type: constants.ADD_TEXT,
  payload: text,
});

export const todoDeleteHandler = () => ({
  type: constants.DELETE_TEXT
});