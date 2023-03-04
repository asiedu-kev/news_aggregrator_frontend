import React from "react";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { persistor, store } from "./store";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#3B51FA",
              },
            }}
          >
            <App />
          </ConfigProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
