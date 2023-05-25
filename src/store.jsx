// import { createStore } from "redux";
// import rootReducer from "./Reducers/Index";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/Index";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
