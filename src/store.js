import { createStore } from "redux";
import fetchReducer from "./reducers/fetchReducer";

const initialState = {
  data: {
    people: null,
  },
};

const store = createStore(
  fetchReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
