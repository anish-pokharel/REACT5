import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contaner grid1 ">
          <div className="box">
            <img src="./assets/logo.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              veniam adipisci quisquam accusamus, expedita totam eveniet
              recusandae fugiat non, animi consequatur quaerat sunt praesentium
              perspiciatis sed, libero blanditiis? Consequuntur, placeat.
            </p>
            <div className="socialIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-youtube youtube"></i>
            </div>
          </div>
          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ"s</li>
            </ul>
          </div>
          <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
              <p>3 Lorem ipsum dolor sit amet consectetur.</p>
              <span>17 Nov 2022</span>
            </div>
            <div className="text">
              <p>3 Lorem ipsum dolor sit amet consectetur.</p>
              <span>17 Nov 2022</span>
            </div>
            <div className="text">
              <p>3 Lorem ipsum dolor sit amet consectetur.</p>
              <span>17 Nov 2022</span>
            </div>
          </div>

          <div className="box">
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              deserunt natus harum.
            </p>
            <div className="icon">
              <i className="fa fa-phone"></i>
              <label htmlFor="">Location:32Tinkune, Kathmandu ,Nepal</label>
            </div>
            <div className="icon">
              <i className="fa fa-phone"></i>
              <label htmlFor="">Phone:+977-9898989898</label>
            </div>
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <label htmlFor="">Email:code@gmail.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>Copyright @2022.ALL Right Reserved</p>
          <label htmlFor="">design copied of grokcode</label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
