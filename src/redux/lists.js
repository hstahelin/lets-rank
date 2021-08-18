import * as ActionTypes from "./ActionTypes";
import { LISTS } from "../shared/lists";

export function Lists(state = { lists: LISTS }, action) {
  switch (action.type) {
    case ActionTypes.ADD_LIST:
      const newList = action.payload;
      newList.id = Math.max(...state.lists.map((list) => list.id)) + 1;
      // newList.name = newList.name + " (Copy)";
      return { ...state, lists: state.lists.concat(newList) };
    case ActionTypes.REMOVE_LIST:
      return {
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    case ActionTypes.ADD_SHOW_LIST:
      const addList = state.lists.filter(
        (list) => list.id === +action.payload.listId
      )[0];
      addList.list.push(action.payload.showId);
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === addList.id ? addList : list
        ),
      };
    case ActionTypes.REMOVE_SHOW_LIST:
      const removeList = state.lists.filter(
        (list) => list.id === +action.payload.listId
      )[0];
      const index = removeList.list.indexOf(action.payload.showId);
      removeList.list.splice(index, 1);
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === removeList.id ? removeList : list
        ),
      };
    default:
      return state;
  }
}
