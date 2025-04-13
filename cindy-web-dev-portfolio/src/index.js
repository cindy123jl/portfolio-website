import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Hero />
      <Header />
    </div>
  );
}

function Header() {
  //look for font
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
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
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div class="container-fluid">
        <video width="320" height="240">
          <source src="videos/portfolio-video.mp4"></source>
        </video>
      </div>
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
