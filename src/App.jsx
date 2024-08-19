import { useState } from "react";
import "./App.css"; // Ensure this imports the CSS file where you've added Tailwind directives
import Navigation from "./Componenets/Navigation";
import Mybody from "./Componenets/Mybody";
import Products from "./Componenets/product-page/Products";

function App() {
  return (
    <div>
      <Navigation />
      <Mybody />
      <Products />
    </div>
  );
}

export default App;
