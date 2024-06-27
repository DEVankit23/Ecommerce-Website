import React from 'react'
import BreadCumb from '../BreadCumb'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <BreadCumb title="Forgot Password" />
      <div className="home-page-2 login-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="login-card justify-content-center bg-white">
              <h4 className="text-center text-secondary">Forgot Password?</h4>
              <p className="text-center text-secondary pt-1 pb-3" style={{ "fontSize": "0.72rem" }}>
                We will send you an 6 digit OTP to your Email ID
              </p>
              <form action="" className="d-flex flex-column gap-10">
                <div className="px-2">
                  <input type="email" name="email" placeholder="Email" className="form-control" />
                </div>
                <div>
                  <div className="login-button d-flex justify-content-center gap-10 mt-3">
                    <Link to="/submitotp" type="button" className="btn btn-dark px-3">Send OTP</Link>
                    <Link to="/login" type="button" className="btn btn-light px-3">Cancel</Link>
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

export default ForgotPassword