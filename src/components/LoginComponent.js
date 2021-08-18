import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(true);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center mb-5">
        <div
          id="login"
          className={login ? "col-12 col-sm-6 col-lg-5 featured" : "d-none"}
        >
          <div className="card">
            <div className="card-header">
              <h1>Login</h1>
            </div>
            <div className="card-body">
              <form action="/home">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-1">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <div className="mb-4">
                  <Link to="#" className="text-decoration-none">
                    <small>Forgot Your Password?</small>
                  </Link>
                </div>
                <hr />

                <div className="text-center">
                  <Link
                    to="#"
                    onClick={() => setLogin(!login)}
                    className="text-decoration-none"
                  >
                    Don't have an account? SignUp here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className={login ? "d-none" : "col-12 col-sm-6 col-lg-5 featured"}
          id="signup"
        >
          <div className="card">
            <div className="card-header">
              <h1>SignUp</h1>
            </div>
            <div className="card-body">
              <form action="/home">
                <div className="row">
                  <div className="input-group">
                    <label
                      htmlFor="exampleInputUsername2"
                      className="form-label"
                    >
                      Username
                    </label>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-text">@</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      id="exampleInputUsername2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword2"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputConfirmPassword2"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      SignUp
                    </button>
                  </div>
                  <hr />
                  <div className="text-center">
                    <Link
                      to="#"
                      onClick={() => setLogin(!login)}
                      className="text-decoration-none"
                    >
                      Already have an account? Login here
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
