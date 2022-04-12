import React from "react";
import ReactDOM from "react-dom";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById("root") // eslint-disable-line comma-dangle
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
