import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

function Header() {
  //look for font
  return (
    <header>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="./">
            <div class="container">
              <div class="row">
                <div class="col">
                  <img
                    src="logo/artmeetcindylogo.png"
                    alt="Logo"
                    width="30"
                    height="30"
                    class="d-inline-block align-text-top"
                  />
                </div>
                <div class="col">
                  <p className="header-title">
                    Cindy's Web Development Porfolio
                  </p>
                </div>
                <div class="col">hi</div>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //runs code to check for bugs just a nice to have not required
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
