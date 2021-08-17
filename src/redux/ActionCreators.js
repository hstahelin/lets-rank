import * as ActionTypes from "./ActionTypes";

export const addList = (list) => ({
  type: ActionTypes.ADD_LIST,
  payload: list,
});

export const removeList = (listId) => ({
  type: ActionTypes.REMOVE_LIST,
  payload: listId,
});
