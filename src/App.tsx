import React from "react";
import "./App.css";
import Picture from "./pages/picture";
import Nav from "./components/navbar";
import { productStore } from "./stores/productStore";
import RoadMap from "./pages/roadmap";
import Cart from "./pages/Cart";
import AboutMe from "./components/AboutMe";
import HomeBooking from "./pages/houseBooking";

const App: React.FC = () => {
  return (
    <div>
      <Nav productStore={productStore} />
      <Picture />
      <AboutMe />
      <Cart />
      <RoadMap />
      <HomeBooking />
    </div>
  );
};

export default App;
