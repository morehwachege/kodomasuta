import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const [item, setItem] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const API = "http://localhost:3000";


  const submitLogin = (e) => {
    e.preventDefault();
    fetch(`${API}/api/v1/login`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: loginEmail,
          password: loginPassword,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("authentication", data.jwt));

      // setAuth(data.jwt)


    // setLoginEmail("");
    // setLoginPassword("");
  };

  return (
    <div className="logincontainer">
      <h2 className="logo">kodomasuta</h2>
      <div class="container py-1 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card-login">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 ">Login</h2>
                  <p class="text-dark-50 mb-3 code">code like never before...</p>

                  <form >
                    <div className="form-floating mb-3 p-0">
                      <i class="icon fa-solid fa-envelope"></i>
                      <input
                        type="email"
                        name="name"
                        className="form-control bg-dark text-white pl-3"
                        id="floatingName"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-floating mb-3">
                      {/* <i class="icon fa-solid fa-unlock-keyhole"></i>
                      <i class="icon fa-light fa-unlock-keyhole"></i> */}
                      <input
                        type="password"
                        className="form-control bg-dark text-white p-0"
                        id="floatingName"
                        name="password"
                        placeholder="Password"
                         value={loginPassword}
                         onChange={(e) => setLoginPassword(e.target.value)}
                      ></input>
                    </div>

                  </form>
                  <button
                      class="btn btn-login btn-lg px-5 text-white"
                      type="submit" onClick={submitLogin}
                    >
                      Login
                    </button>

                  <div class="form-outline form-white mb-4"></div>
                  <p class="small pb-lg-6">
                    <a class="text-" href="#!">
                      Forgot password?
                    </a>
                  </p>



                </div>

                <div>
                  <p class="mb-0 code">
                    Don't have an account?{" "}
                    <Link to="/signup">
                      <a href="" class="text fw-bold">
                        Sign Up
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
    //
  );
};
export default Login;
