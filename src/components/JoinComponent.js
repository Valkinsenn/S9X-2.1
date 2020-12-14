import React from 'react';
import { Helmet } from 'react-helmet';

function Join() {
    return(
        <div>
            <Helmet>
                <title>Squad 9 - Join</title>
            </Helmet>

            {/* Main Container */}
            <div className="container-fluid py-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="text-center mb-0">Welcome to Squad 9, Recruits!</h1>
                        <hr className="main-hor-rule" />
                        <h4 className="text-center mb-3">Thank you for your interest in joining us</h4>

                        <p className="text-center">We are currently accepting applications for membership. <br /> Before applying, please ensure you meet the following criteria:</p><br />

                        <ol className="ml-0 pl-3 pl-lg-0">
                            <li>Be at least 16 years old.</li>
                            <li>Have a working microphone or headset.</li>
                            <li>Have Discord installed and ready to use.</li>
                            <li>Play at least one of the games we operate on.</li>
                            <li>Are not a part of any other groups or clans requiring tags.</li>
                        </ol>
                    </div>
                </div>
                <div className="row justify-content-center mt-4 mb-5">
                    <div className="col-lg-7">
                        <div className="container-fluid px-0">
                            <div className="row justify-content-center">
                                <div className="col">
                                    <div className="recruitment-box">
                                        <img src="/assets/images/slidecard_2.png" alt="Call of Duty: Modern Warfare" className="recruitment-card-l-logo" />
                                        <img src="/assets/images/slidecard_1.png" alt="Halo: The Master Chief Collection" className="recruitment-card-r-logo" />
                                        <img src="/assets/images/mw_price.png" alt="Captain Price" className="d-none d-sm-block recruitment-card-l-img" />
                                        <img src="/assets/images/mcc_mstchf.png" alt="The Master Chief" className="d-none d-sm-block recruitment-card-r-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <p className="text-center mb-0">If you meet all the above requirements, click the button below, fill out the form, and submit it to us!</p>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <p className="text-center">You will be contacted by our Leadership over Steam or Discord if you are accepted.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <a href="https://forms.gle/vXTcVgst5P1qVMT99" className="btn btn-dark btn-lg btn-block" target="_blank">Apply Now</a>
                    </div>
                </div>
            </div>

            {/* Backing Image */}
            <div class="backing-image-1"></div>
        </div>
    )
}

export default Join;