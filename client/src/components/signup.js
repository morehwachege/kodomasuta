import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();


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
      .then((r) => {
        // setIsLoading(false);
        if (r.ok) {
          r.json().then(() => navigate("/login"), console.log("success"));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }
  return (
    <>
      <div className="container-fluid main-login">
        <h2 className="logo">
          <Link to="/" exact>
            kodomasuta
          </Link>
        </h2>
        <div className="login-container d-flex flex-column align-items-center justify-content-center">
          <div className="container-fluid login-main p-0 d-flex justify-content-center align-items-center">
            <div className="row w-100 d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                <div class="card-login">
                  <div class="card-body text-center py-5 px-5 mt-3">
                    <div class="mb-md-5 mt-md-4 pb-3">
                      <h2 class="fw-bold mb-2 ">Sign Up</h2>
                      <p class="text-dark-50 mb-3 code">
                        code like never before...
                      </p>
                      <form>
                        <div className="form-floating mb-3">
                          {/* <i class="icon fa-solid fa-envelope"></i> */}
                          <input
                            type="email"
                            name="name"
                            className="form-control bg-dark text-white py-0 px-3"
                            id="floatingName"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <h4 className="errorhead text-danger">
                            {" "}
                            {errors.map((error) => error)}{" "}
                          </h4>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control bg-dark text-white py-0 px-3 "
                            id="floatingName"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          ></input>
                        </div>
                        <div>
                          <button
                            class="btn btn-login px-5 btn-lg text-white"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>

                      <div class="form-outline form-white mb-2"></div>
                      {/* <p class="small pb-lg-8">
                        <a class="text-" href="#!">
                          Forgot password?
                        </a>
                      </p> */}
                    </div>

                    <div>
                      <p class="mb-5 code">
                        Already have an account? {" "}
                        <Link to="/login">
                          <a href="" class="text fw-bold">
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
      </div>
    </>
  );
};
export default Signup;
