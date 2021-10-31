import React, { useRef } from "react";
import Picture from "./pages/picture";
import Home from "./pages/Home";
import Nav from "./components/navbar";
import "./App.css";
import { productStore } from "./stores/store";
import RoadMap from "./pages/roadmap";

const App: React.FC = () => {
  const ref = useRef(null);
  return (
    <div>
      <Nav productStore={productStore} />
      <Picture />
      <Home />
      <RoadMap />
      <button
        onClick={() => console.log(ref.current.getBoundingClientRect())}
      ></button>
    </div>
  );
};

export default App;
