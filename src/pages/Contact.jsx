import React from "react";
import "../css/contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h3>Contact US</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat
          asperiores velit atque delectus nobis reprehenderit perspiciatis,
          rerum quos. Voluptatem velit eveniet deserunt sint! Corrupti quas et
          explicabo ipsam exercitationem!
        </p>
      </div>
      <div className="container my-3 d-flex justify-content-center align-content-center">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i class="ri-map-pin-fill" style={{color:"#f69d3c"}}></i></div>
            <div className="text">
              <h4>Address</h4>
              <p>
                AT/PO- NearBY- <br />
                Dist-BDK PIN-765112
                <br /> Odisha
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="ri-mail-fill" style={{color:"#f69d3c"}}></i></div>
            <div className="text">
              <h4>Email</h4>
              <p>
                FzStore@email.com
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon" ><i class="ri-phone-fill" style={{color:"#f69d3c"}}></i></div>
            <div className="text">
              <h4>Phone</h4>
              <p>
                99xxxxx54x
              </p>
            </div>
          </div>
        </div>
        <div className="contactMap">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7137778352712!2d86.48950281488365!3d21.04413548599009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bf60e581ad1ed%3A0x1f7c3c05aa9a5bcd!2sVinayak%20College%20Of%20Science%20And%20Commerce%20%2B2!5e0!3m2!1sen!2sin!4v1676293159540!5m2!1sen!2sin" width="600" height="370" style={{border:0}} allowfullscreen="" loading="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
};
export default Contact;