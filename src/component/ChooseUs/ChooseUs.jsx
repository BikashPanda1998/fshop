import React from "react";
import "./ChooseUs.css";
import pburgger from "../../asset/images/hero.png";
const ChooseUs=()=>{
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={pburgger} alt="pburgger" className="w-100" />
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <h4>who we are?</h4>
                            <h2>take a look at the benefit we offer you</h2>
                            <p>'burgerfrench' is defined but never used  no-unused-vars
                                 Line 6:8:  'footer' is defined but never used </p>
                        </div>
                        <div className="feature mt-3">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single_feature">
                                    <span><i className="ri-truck-line"></i></span>
                                    <h5>Free Home Delivery</h5>
                                    <p>'slide1' is defined but never used</p>
                                </div>
                                <div className="single_feature">
                                    <span className=""><i className="ri-money-dollar-circle-line" id="feature_icon-two"></i></span>
                                    <h5>Return & Refund</h5>
                                    <p>'slide2' is defined but never used</p>
                                </div>
                            </div>
                            <div className="feature1 mt-3 d-flex align-items-center gap-5">
                                <div className="single_feature">
                                    <span className=""><i className="ri-secure-payment-line" id="feature_icon-3"></i></span>
                                    <h5>Secure Payment Method</h5>
                                    <p>'slide1' is defined but never used</p>
                                </div>
                                <div className="single_feature">
                                    <span className=""><i className="ri-24-hours-line" id="feature_icon-4"></i></span>
                                    <h5>24/7 Customer Support </h5>
                                    <p>'slide2' is defined but never used</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs