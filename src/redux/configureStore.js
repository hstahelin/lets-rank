import { createStore, combineReducers } from "redux";
import { Lists } from "./lists";
import { User } from "./user";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      lists: Lists,
      user: User,
    })
  );

  return store;
};
