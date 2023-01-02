import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({onLogout}) => {
  const navigate = useNavigate()
  function handleLogoutAction(){
    fetch("/logout", {
      method: "DELETE"
    }).then(() => {
      return onLogout();
      // return navigate("/login");
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4 sticky-top navigation">
      <div className="container px-lg-2">
        <Link className="navbar-brand" to="/dashboard">
          kodomasuta
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/assessments"
              >
                assesments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notifications">
                notifications
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-start align-items-center text-white" onClick={handleLogoutAction} style={{cursor: "pointer"}}>
                signout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
