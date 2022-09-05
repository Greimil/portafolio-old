import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./componentes";
import Aboutme from "./componentes/Aboutme";
import Contact from "./componentes/Contact";
import { Provider } from "react-redux";
import store from "./componentes/storage/index"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <Provider store={store} >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </Provider>
  //  </React.StrictMode>
);
