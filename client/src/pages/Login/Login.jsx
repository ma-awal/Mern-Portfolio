import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="admin_form">
      <h4 className="loginTitle">Login</h4>
      <form className="loginForm">
        <div className="form-group mb-3">
          <label>Username</label>
          <input
            className=" form-control"
            type="text"
            placeholder="Enter your username..."
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter your password..."
          />
        </div>
        <button
          className=" btn btn-sm btn-warning w-100 mb-3 py-2 rounded-0"
          type="submit"
        >
          Login
        </button>
      </form>
      <button className="btn-sm btn btn-warning rounded-0 py-2 w-100">
        <Link className="nav-link link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
