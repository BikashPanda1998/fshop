import React from "react";
import Contact from "./Contact";
import AS1 from "../asset/image/about-us.png";
//import "../css/about.css"
const About=()=>{
    return(
        <div className="container">
            <div className="d-flex justify-content-lg-between align-content-lg-center mb-3">
            <div className="col-lg-5">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
             Velit reiciendis ex rem voluptatem quia nisi accusantium dolores facilis voluptates consequatur quam repellendus cumque, nostrum eos repudiandae pariatur consequuntur possimus atque.
            </p>
            <button className="btn btn-outline-warning">READ MORE</button>
            </div>
            <div className="">
                <img src={AS1} alt="" width="300" />
            </div>
            </div>
            <Contact />
        </div>
    )
}
export default About;