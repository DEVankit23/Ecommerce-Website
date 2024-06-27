import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
      <div className="card">
        <div className="blog-cards">
          <img src="images/Blog/blog-1.jpg" className="card-img-top" alt="blog-news" />
          <div className="card-body">
            <p className="card-date mb-2">11 June, 2023</p>
            <h5 className="card-title">News Title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-dark btn-sm">Read More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard