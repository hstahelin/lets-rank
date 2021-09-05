import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/ActionCreators";

import { USERS } from "../shared/users";

function Login() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [login, setLogin] = useState(true);

  const [loginError, setLoginError] = useState(false);
  const [infoLogin, setInfoLogin] = useState({ user: "", password: "" });

  function handleLoginChange(e) {
    if (e.target.name === "username") {
      setInfoLogin({ ...infoLogin, user: e.target.value });
    }
    if (e.target.name === "password") {
      setInfoLogin({ ...infoLogin, password: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInfoLogin({ user: "", password: "" });
    const userLogged = USERS.filter(
      (user) =>
        user.username === infoLogin.user && user.password === infoLogin.password
    );

    if (userLogged.length > 0) {
      dispatch(addUser(userLogged[0]));
      //console.log(userIn);
      history.push("/home");
    }

    if (userLogged.length === 0) {
      setLoginError(true);
    }
  }

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
              {loginError && (
                <Alert variant="danger">Incorrect Username or Password!</Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={infoLogin.user}
                    onChange={handleLoginChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={infoLogin.password}
                    onChange={handleLoginChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mb-3"
                  onSubmit={handleSubmit}
                >
                  Login
                </Button>

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
                <hr />

                <div className="text-center">
                  <h5>Test Users:</h5>
                  <h6>
                    <small>Username: Peters_718 / Password: Peters_718</small>
                  </h6>
                  <h6>
                    <small>
                      Username: Kirkland_990 / Password: Kirkland_990
                    </small>
                  </h6>
                </div>
              </Form>
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
              <h6>
                <small>
                  <i>Not yet implemented</i>
                </small>
              </h6>
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
                    <button type="submit" className="btn btn-danger" disabled>
                      Not yet implemented
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
