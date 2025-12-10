import "./Contact.css"

export default function Contact() {
  return (
    <div className=" d-flex justify-content-center align-items-center  flex-column py-5 ">
      <h1 className="fw-bold  mb-3 text-uppercase text-dark">conatct section</h1>
      <div className=" text-black d-flex align-items-center justify-content-center mb-3">
        <div className="line bg-black"></div>
        <i className="fa-solid fa-star mx-3 fs-6"></i>
        <div className="line bg-black"></div>
      </div>

      <div className="form w-50">
        <div className="form-floating mb-5">
          <input type="name" className="form-control  border-0  border-bottom " id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">userName</label>
        </div>
        <div className="form-floating mb-5">
          <input type="number" className="form-control border-0  border-bottom" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">userAge</label>
        </div>
        <div className="form-floating mb-5">
          <input type="email" className="form-control border-0  border-bottom" id="floatingPassword" placeholder="name@example.com" />
          <label for="floatingPassword">userEmail</label>
        </div>
        <div className="form-floating ">
          <input type="password" className="form-control border-0  border-bottom" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">userPassword</label>
        </div>
    
        <button  class="btn mt-4 text-white" style={{backgroundColor:"#1abc9c"}} > Send Message </button>
      </div>
    </div>

  )
}
