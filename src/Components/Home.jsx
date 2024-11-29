import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChartComponent from "./ChartComponent";

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <header className="mb-4">
        <h1>Welcome to My Website</h1>
        <p className="lead">A simple React.js home page using Bootstrap</p>
      </header>
      <ChartComponent/>


      <footer className="mt-5">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
