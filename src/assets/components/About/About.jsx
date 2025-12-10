import React from 'react'

export default function About() {
  return (
    <div className="home d-flex justify-content-center align-items-center  flex-column text-white vh-100">
      <div className="text-center">
        <h1 className="fw-bold  mb-3 text-uppercase">about component</h1>
        <div className=" text-white d-flex align-items-center justify-content-center mb-3">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-3 fs-6"></i>
          <div className="line"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 ps-md-5">
              <p className=' text-start '> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
            </div>
            <div className="col-md-6 col-sm-12 pe-5">
              <p className=' text-start'> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
