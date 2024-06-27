import React from 'react'
import BreadCumb from '../BreadCumb'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <BreadCumb title="Sign Up" />
      <div className="home-page-2 login-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="login-card justify-content-center bg-white">
              <h4 className="text-center pb-4">Create Account</h4>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="Name" name="Name" placeholder="First Name" className="form-control" required />
                </div>
                <div>
                  <input type="Name" name="Name" placeholder="Last Name" className="form-control" required />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" className="form-control" required />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" className="form-control" minLength="8" maxLength="14" required />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Confirm Password" className="form-control" minLength="8" maxLength="14" required />
                </div>
                <div>
                  <div className="login-button d-flex justify-content-center gap-10 mt-3">
                    <Link to="/login" type="button" className="btn btn-dark px-3">
                      Sign Up
                    </Link>
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

export default SignUp