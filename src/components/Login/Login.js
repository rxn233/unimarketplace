import { Fragment } from "react";
import "./Login.css";

function Login() {
  return (
    <div className="main-login">
      <form className="login-form">
        <h1>Login</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
          />
          <label for="username">Username</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
          />
          <label for="password">Password</label>
        </div>
        <button type="submit" class="btn btn-primary btn-ghost">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
