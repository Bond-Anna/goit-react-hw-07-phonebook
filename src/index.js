import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/contacts/contacts-store";
import { App } from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.contactsStore}>
      <PersistGate loading={<h1>Loading..</h1>} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
