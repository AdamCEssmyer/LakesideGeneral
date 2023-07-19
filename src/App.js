import React from "react";
import Navbar from "./components/navbar";

function App() {
  return (
     <div>
      <h1 className="text-3xl font-bold">Welcome to Lakeside!</h1>
      <Navbar />
    </div>
  );
}

const Home = () => {
  return <div>
    <h1>Home</h1>
  </div>
}

const About = () => {
  return <div>
    <h1>About</h1>
  </div>
}

const Products = () => {
  return <div>
    <h1>Products</h1>
  </div>
}

const Contact = () => {
  return <div>
    <h1>Contact</h1>
  </div>
}


export default App;
