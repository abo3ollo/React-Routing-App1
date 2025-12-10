
import { useState } from 'react';

import port1 from '../../images/poert1.png';
import port2 from '../../images/port2.png';
import port3 from '../../images/port3.png';
import "./Portfolio.css"

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: port1, alt: "Portfolio 1" },
    { src: port2, alt: "Portfolio 2" },
    { src: port3, alt: "Portfolio 3" },
    { src: port1, alt: "Portfolio 4" },
    { src: port2, alt: "Portfolio 5" },
    { src: port3, alt: "Portfolio 6" },
  ];

  function handleImageClick (image) {
    setSelectedImage(image);
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
  <>

    <div className=" d-flex justify-content-center align-items-center  flex-column  py-5 ">
      <h1 className="fw-bold  mb-3 text-uppercase text-dark">portfolio component</h1>
      <div className=" text-black d-flex align-items-center justify-content-center mb-3">
        <div className="line bg-black"></div>
        <i className="fa-solid fa-star mx-3 fs-6"></i>
        <div className="line bg-black"></div>
      </div>
      <div className="container">
        <div className="row g-5">
          {images.map((image, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div 
                  className="portfolio-card position-relative rounded-3 overflow-hidden"
                  onClick={() => handleImageClick(image ,console.log(image, index)
                  ) }
                  
                  >
                  <img src={image.src} alt={image.alt} className="w-100 d-block rounded-3" />
                  <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
 

            
            
    {/* Custom Modal */}
{showModal && selectedImage && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="modal-content">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image" 
            />
          </div>
        </div>
      )}
  </>
  )
}
