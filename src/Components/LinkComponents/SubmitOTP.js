import React from 'react'
import BreadCumb from '../BreadCumb'
import { Link } from 'react-router-dom'

const SubmitOTP = () => {
  return (
    <>
      <BreadCumb title="Forgot Password" />
      <div className="home-page-2 login-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="login-card justify-content-center bg-white">
              <h4 className="text-center text-secondary pb-4">Submit OTP</h4>
              <form action="" className="d-flex flex-column gap-10">
                <div className='px-4'>
                  <input type="tel" name="otp" placeholder="Submit OTP" className="form-control" maxLength="6" required/>
                </div>
                <div>
                  <div className="login-button d-flex justify-content-center gap-10 mt-3">
                    <Link type="button" className="btn btn-dark px-3">Resend OTP</Link>
                    <Link to="/reset-password" type="button" className="btn btn-dark px-3">Submit</Link>
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

export default SubmitOTP