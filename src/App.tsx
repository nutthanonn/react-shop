import React from "react";
import Picture from "./pages/picture";
import Home from "./pages/Home";
import Nav from "./components/navbar";
import "./App.css";
import { productStore } from "./stores/store";

const App: React.FC = () => {
  return (
    <div>
      <Nav productStore={productStore} />
      <Picture />
      <Home />
    </div>
  );
};

export default App;
