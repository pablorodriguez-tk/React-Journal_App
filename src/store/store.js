import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
