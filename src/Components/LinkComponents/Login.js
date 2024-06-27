import React from 'react'
import BreadCumb from '../BreadCumb'
import { Link } from 'react-router-dom'
// import { IoIosMail } from "react-icons/io";

const Login = () => {
  return (
    <>
      <BreadCumb title="Log in" />
      <div className="home-page-2 login-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="login-card justify-content-center bg-white">
              <h3 className="text-center pb-4">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="email" name="email" placeholder="Email" className="form-control" required />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" className="form-control" minLength="8" maxLength="10" required />
                </div>
                <div>
                  <div className="forgot-password ms-1">
                    <Link to="/forgotpass">Forgot Password?</Link>
                  </div>
                  <div className="login-button d-flex justify-content-center gap-10 mt-3">
                    <Link type="button" className="btn btn-dark px-3">Login</Link>
                    <Link to="/signup" type="button" className="btn btn-dark px-3">SignUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login