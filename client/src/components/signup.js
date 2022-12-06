import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="logincontainer">
      <h2 className="logo">Kodomasuta</h2>
      <div class="container py-1 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-2 col-xl-5">
            <div class="card-login">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 ">Signup</h2>
                  <p class="text-dark-50 mb-5">code like never before...</p>

                  <form>
                    <div className="form-floating mb-3">
                      <i class="icon fa-solid fa-envelope"></i>
                      <input
                        type="email"
                        className="form-control bg-dark text-white"
                        id="floatingName"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div className="form-floating mb-3">
                      <i class="icon fa-solid fa-unlock-keyhole"></i>
                      <i class="icon fa-light fa-unlock-keyhole"></i>
                      <input
                        type="password"
                        className="form-control bg-dark text-white"
                        id="floatingName"
                        placeholder="Password"
                      ></input>
                    </div>
                  </form>
                  <Link to="/dashboard">
                  <button
                    class="btn-login btn-lg px-5 text-white"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  </Link>
                </div>

                <div>
                  <p class="mb-0">
                    Already have an account?{" "}
                    <Link to="/">
                      <a href="#!" class="text fw-bold">
                        Login
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
