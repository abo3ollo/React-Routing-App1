
import avatarImage from '../../images/avataaars.svg';
import './Home.css';

export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center text-white vh-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <div className="text-center">
                <img
                  src={avatarImage}
                  className="avatar-image mb-4"
                  alt="Avatar"
                />
                <h1 className="fw-bold  mb-3">START FRAMEWORK</h1>
                <div className=" text-white d-flex align-items-center justify-content-center mb-3">
                  <div className="line"></div>
                  <i className="fa-solid fa-star mx-3 fs-6"></i>
                  <div className="line"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            
          </div>
        </div>
      </div>
    </div>

  )
}
