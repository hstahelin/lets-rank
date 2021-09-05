import * as ActionTypes from "./ActionTypes";

export function User(state = {}, action) {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      const user = action.payload;
      return user;

    default:
      return state;
  }
}
