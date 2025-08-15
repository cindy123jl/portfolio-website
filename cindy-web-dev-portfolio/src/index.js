import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

function Header() {
  //look for font
  return (
    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="./">
            <div class="row">
              <div class="col">
                <img
                  src="logo/artmeetcindylogo.png"
                  alt="Logo"
                  width="40"
                  height="40"
                  class="d-inline-block align-text-top"
                />
              </div>
              <div class="col">
                <p className="header-title">Cindy's Web Development Porfolio</p>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="hero-video">
        <source src="videos/portfolio-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1 className="hero-text">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <h1 className="header-title">hi. I am Cindy Lara! </h1>
      <p className="header-paragraph">
        A curious kid at heart, driven by curiousity. With a happy middle
        ground, lover of challenges and creativity, Web development is for me. A
        problem solver with Sudoku and creator with Crochet on my spare time. :D
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //runs code to check for bugs just a nice to have not required
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
