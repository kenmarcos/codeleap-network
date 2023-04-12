import { createStore, combineReducers } from "redux";
import userReducer from "../user/reducer";

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;

export default store;
