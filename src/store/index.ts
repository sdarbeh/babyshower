import { createStore, combineReducers } from "redux";
import { fontSize, theme, inviationModal } from "./reducers";

const rootReducer = combineReducers({
  fontSize,
  theme,
  inviationModal
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  // compose(
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  //     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
