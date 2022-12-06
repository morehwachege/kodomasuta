import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="logo">Kodomasuta</h2>
    <div class="container py-1 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-2 col-xl-5">
        <div class="card-login">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 ">Login</h2>
              <p class="text-dark-50 mb-5">code like never before...</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Email" />
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Password" />
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text " href="#!">Forgot password?</a></p>

              <button class="btn-login btn-lg px-5 text-white" type="submit">Login</button>


            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text fw-bold">Sign Up</a>
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
export default Login;
