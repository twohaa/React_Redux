import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//CRUD
import App from "./crudApp/App";
import store from './crudApp/app/store'
import { Provider } from "react-redux";

// import App from "./App";
// import store from "./services/store";
// import store1 from "./services/store1";
// import store from "./app/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store} >
//   {/* // <Provider store={store1}> */}
//     <App />
//   </Provider>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
