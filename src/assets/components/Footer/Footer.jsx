

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4 ">
                            <div className="card border-0 bg-transparent text-white p-3 d-flex justify-content-center align-items-center  ">
                                <h3 className="text-uppercase pt-3">location</h3>
                                <p className="mb-3">2215 John Daniel Drive</p>
                                <p className="mb-3">Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card border-0 bg-transparent text-white p-3 d-flex justify-content-center align-items-center  ">
                                <h3 className="text-uppercase pt-4">AROUND THE WEB</h3>
                                <div className="icons">
                                    <i className="fa-brands fa-facebook icon mx-1"></i>
                                    <i className="fa-brands fa-x-twitter icon mx-1"></i>
                                    <i className="fa-brands fa-linkedin-in icon mx-1"></i>
                                    <i className="fa-solid fa-globe icon mx-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card border-0 bg-transparent text-white p-3 d-flex justify-content-center align-items-center  ">
                                <h3 className="text-uppercase pt-3">ABOUT FREELANCER</h3>
                                <p className="text-center ">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <div className="footer-low  text-white  text-center  py-3">
                    <p className="mb-3 pt-2">Copyright © Your Website 2025</p>
                </div>


        </>
    );
}
