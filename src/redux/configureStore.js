import { createStore, combineReducers } from "redux";
import { Lists } from "./lists";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      lists: Lists,
    })
  );

  return store;
};
