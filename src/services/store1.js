import thunk from "redux-thunk";
import todosReducer from "./reducers/todosReducer";
const { createStore, applyMiddleware } = require("redux");

const store1 = createStore(todosReducer, applyMiddleware(thunk));
export default store1;
