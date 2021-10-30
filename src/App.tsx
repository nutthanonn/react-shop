import React from "react";
import Picture from "./pages/picture";
import Home from "./pages/Home";
import Nav from "./components/navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Picture />
      <Home />
    </div>
  );
};

export default App;
