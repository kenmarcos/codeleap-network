import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "../user/reducer";
import postReducer from "../post/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  user: userReducer,
  posts: postReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export default store;
