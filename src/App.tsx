import React from "react";
import Picture from "./pages/picture";
import Nav from "./components/navbar";
import "./App.css";
import { productStore } from "./stores/productStore";
import RoadMap from "./pages/roadmap";
import Cart from "./pages/Cart";
import AboutMe from "./components/AboutMe";

const App: React.FC = () => {
  return (
    <div>
      <Nav productStore={productStore} />
      <Picture />
      <AboutMe />
      <Cart />
      <RoadMap />
    </div>
  );
};

export default App;
