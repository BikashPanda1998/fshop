import React from "react";
import "./Testimonial.css";
import user from "../../asset/image/testimonial01.png";

const Testimonial=()=>{
    return(
        <section>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 m-auto">
                        <h2>What Our customers are saying</h2>
                        <div className="slider__wrapper d-flex">
                            <div className="slider__content w-50">
                          {/*   <Slider>
                            <div>
                                <div className="single__testimonial">
                                <p className="review__content">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                     Consequatur voluptate porro suscipit ea adipisci dolorum odit quis, 
                                    cum totam similique magni ut alias asperiores eligendi necessitatibus
                                     doloremque saepe itaque natus.
                                </p>
                                <h6>luis jhon</h6>
                                <p>web devloper</p>
                                </div>
                            </div>
                            <div>
                                <div className="single__testimonial">
                                <p className="review__content">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                     Consequatur voluptate porro suscipit ea adipisci dolorum odit quis, 
                                    cum totam similique magni ut alias asperiores eligendi necessitatibus
                                     doloremque saepe itaque natus.
                                </p>
                                <h6>luis jhon</h6>
                                <p>web devloper</p>
                                </div>
                            </div>
                            <div>
                                <div className="single__testimonial">
                                <p className="review__content">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                     Consequatur voluptate porro suscipit ea adipisci dolorum odit quis, 
                                    cum totam similique magni ut alias asperiores eligendi necessitatibus
                                     doloremque saepe itaque natus.
                                </p>
                                <h6>luis jhon</h6>
                                <p>web devloper</p>
                                </div>
                            </div>
                            <div>
                                <div className="single__testimonial">
                                <p className="review__content">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                     Consequatur voluptate porro suscipit ea adipisci dolorum odit quis, 
                                    cum totam similique magni ut alias asperiores eligendi necessitatibus
                                     doloremque saepe itaque natus.
                                </p>
                                <h6>luis jhon</h6>
                                <p>web devloper</p>
                                </div>
                            </div>
                        </Slider> */}
                  
                            </div>
                            <div className="slider_img w-50">
                                <div className="col-lg-4">
                                    <img src={user} alt="testimonial" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    )
}
export default Testimonial