import React from 'react';
import { Link } from 'react-router-dom';
import BreadCumb from '../Components/BreadCumb';
import BlogCard from '../Components/LinkComponents/BlogCard';

const About = () => {
  return (
    <>
      <BreadCumb title="About" />
      <div className="home-page-2 about-wrapper card-wrapper">
        <div className="container-xxl pt-4">
          <div className="row">
            <div className="col-3">
              <div className="filter-card">
                <h3 className="filter-title">Dashboard</h3>
                <div className="filter-product">
                  <div className="link ps-0 text-secondary">
                    <div>
                      <Link to="/">Home</Link>
                    </div>
                    <div>
                      <Link to="/about">About us</Link>
                    </div>
                    <div>
                      <Link to="/store">Our Store</Link>
                    </div>
                    <div>
                      <Link to="/contact">Contact us</Link>
                    </div>
                    <div>
                      <Link to="/cart">Your Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-4 mb-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About