import React from "react";
import Picture from "./pages/picture";
import Home from "./pages/Home";
import Nav from "./components/navbar";
import "./App.css";
import { productStore } from "./stores/store";
import RoadMap from "./pages/roadmap";

const App: React.FC = () => {
  return (
    <div>
      <Nav productStore={productStore} />
      <Picture />
      <Home />
      <RoadMap />
    </div>
  );
};

export default App;
