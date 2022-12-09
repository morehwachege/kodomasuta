import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-4 sticky-top navigation">
      <div class="container px-lg-2">
        <Link class="navbar-brand" to="/">
          kodomasuta
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/assesments"
              >
                assesments
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/notifications">
                notifications
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/logout">
                Signout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
