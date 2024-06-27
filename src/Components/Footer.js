import React from 'react'
import { Link } from 'react-router-dom';
import { DiProlog } from "react-icons/di";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub, FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className='back-top-button text-center py-3'>
        <Link className='text-white'>Back to top</Link>
      </div>

      <footer className='py-3'>
        <div className="container-xxl footer-top p-4">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-coloumn d-flex gap-20 align-items-center text-white">
                <DiProlog className='subscribe-icon' />
                <h2 className='subscribe-text mb-0'>Subscribe for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-2 px-3 fs-5" placeholder="Enter your Email address" aria-label="Enter your Email address" aria-describedby="basic-addon2" />
                <span className="input-group-text fs-5 fw-bold" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-3'>
        <div className="container-xxl footer-mid p-5">
          <div className="row row-cols-5 text-white">

            <div className="column coloumn-1">
              <h5 className='fw-bold pb-1'>Dashboard</h5>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about">About Us</Link></div>
              <div><Link to="/store">Our store</Link></div>
              <div><Link to="/contact">Contact details</Link></div>
            </div>

            <div className="column coloumn-2">
              <h5 className='fw-bold pb-1'>Join Us</h5>
              <div className='social-icons d-flex gap-10'>
                <Link> <FaTwitter /> </Link>
                <Link> <FaFacebook /> </Link>
                <Link> <FaInstagram /> </Link>
                <Link> <FaYoutube /> </Link>
                <Link> <FaGithub /> </Link>
                <Link> <FaLinkedin /> </Link>
              </div>
            </div>

            <div className="column coloumn-4">
              <h5 className='fw-bold pb-1'>About You</h5>
              <div><Link>Search Products</Link></div>
              <div><Link>Your Account</Link></div>
              <div><Link>Your Orders</Link></div>
            </div>

            <div className="column coloumn-3">
              <h5 className='fw-bold pb-1'>Get to Know Us</h5>
              <div><Link to="/privacy-policy">Privacy Policy</Link></div>
              <div><Link>Sells</Link></div>
              <div><Link to="/refund-return-policy">Refund and Returns</Link></div>
              <div><Link to="/terms-conditions">Terms and Conditions</Link></div>
              <div><Link to="/help">Help</Link></div>
            </div>


            <div className="column coloumn-5">
              <h5 className='fw-bold pb-1'>Our App</h5>
              <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga!</p></div>
              <div className="app-download-link">
                <div className="app-download download-android mb-2">
                  <IoLogoGooglePlaystore className='store-icon fs-2' />
                  <span className="sen-1">Download on</span>
                  <span className="sen-2">Play Store</span>
                </div>
                <div className="app-download download-ios">
                  <FaApple className='store-icon fs-2' />
                  <span className="sen-1">Download on</span>
                  <span className="sen-2"> App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl footer-bottom">
          <div className="row">
            <div className="col-12">
              <p className="mb-0 text-white text-center py-5">
                &copy; {new Date().getFullYear()} Powered by Merk Stack Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer