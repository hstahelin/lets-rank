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
    default:
      return state;
  }
}
