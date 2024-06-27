import React from 'react'
import BreadCumb from '../Components/BreadCumb';
import { RiPhoneFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <BreadCumb title="Contact Us" />
      <div className="home-page-2 contact-wrapper card-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 my-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5618840690227!2d88.3558775258888!3d22.55807892950211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770746cb53d9%3A0x14b0396c76a38d38!2sJanbazar%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1682611600734!5m2!1sen!2sin" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 contact-details mb-5">
              <div className="contact-wrapper d-flex justify-content-between">
                <div className="contact-content">
                  <h4 className="contact-title">Contact</h4>
                  <form action="" className="d-flex flex-column gap-15 mt-3">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div>
                      <textarea className='form-control w-100' name="" id="" cols="30" rows="4" placeholder="Comments"></textarea>
                    </div>
                  </form>
                  <div className='mt-3'>
                    <button type="button" className="btn btn-dark">Submit</button>
                  </div>
                </div>
                <div className="contact-wrapper-2 ms-2">
                  <h4 className="contact-title">Get in touch with us</h4>
                  <div className="contact-content">
                    <ul className="ps-0 mt-3">
                      <li className="d-flex gap-10 align-items-center">
                        <FaHome />
                        <p className="mb-0">Bazar 21, Abdul Halim Lane Nirmala Shishu Bhavan, West Bengal</p>
                      </li>
                      <li className="d-flex gap-10 align-items-center">
                        <RiPhoneFill />
                        <p className="mb-0">+91 52269-48484 or 033-65679-52349</p>
                      </li>
                      <li className="d-flex gap-10 align-items-center">
                        <IoIosMail />
                        <p className="mb-0">navjeeetsingh@gmail.com</p>
                      </li>
                      <li className="d-flex gap-10 align-items-center">
                        <IoInformationCircleSharp />
                        <p className="mb-0">Monday - Friday 10AM - 6PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact