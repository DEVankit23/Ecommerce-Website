import React from 'react'
import { Link } from 'react-router-dom'
import BreadCumb from '../BreadCumb'

const ResetPassword = () => {
  return (
    <>
      <BreadCumb title="Reset Password" />
      <div className="home-page-2 login-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="login-card justify-content-center bg-white">
              <h4 className="text-center text-secondary">Reset your Password</h4>
              <p className="text-center text-secondary pt-1 pb-3" style={{ "fontSize": "0.72rem" }}>
                Change your password and confirm
              </p>
              <form action="" className="d-flex flex-column gap-10">
                <div>
                  <input type="password" name="password" placeholder="Password" className="form-control" minLength="8" maxLength="14" required />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Confirm Password" className="form-control" minLength="8" maxLength="14" required />
                </div>
                <div>
                  <div className="login-button d-flex justify-content-center gap-10 mt-3">
                    <Link to="/login" type="button" className="btn btn-dark px-3" style={{ "letterSpacing": "0.065rem" }}>
                      CONFIRM
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

export default ResetPassword