import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  // const API = "http://localhost:3000";

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="logincontainer">
      <h2 className="logo">kodomasuta</h2>
      <div class="container py-1 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card-login">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 ">Signup</h2>
                  <p class="text-dark-50 mb-5 code">
                    code like never before...
                  </p>

                  <form>
                    <div className="form-floating mb-3">
                      <i class="icon fa-solid fa-envelope"></i>
                      <input
                        type="email"
                        className="form-control bg-dark text-white"
                        id="floatingName"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                  </form>

                  <button
                    class="btn btn-login btn-lg px-5 text-white"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>

                <div>
                  <p class="mb-0 code">
                    Already have an account?{" "}
                    <Link to="/login">
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
