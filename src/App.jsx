import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
