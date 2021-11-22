import { createStore, combineReducers } from "redux";
import form1reducer from "./Qeforms/Form1reducer";

const reducers = combineReducers({
  form1reducer,
});

const store = createStore(reducers);
export default store;
