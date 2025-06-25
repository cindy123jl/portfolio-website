import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
    </div>
  );
}

function Header() {
  //look for font
  return (
    <header>
      <div class="container-fluid ">
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

      <div className="hero-container">
        <video autoPlay loop muted className="hero-video">
          <source src="videos/portfolio-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1 className="hero-text">Welcome to My Portfolio</h1>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <div className="container">
      <h1>hi. I am Cindy Lara! </h1>
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
