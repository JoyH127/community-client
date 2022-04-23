import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
