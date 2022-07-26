import React from "react";
import "./Banner.css";
import logo from "../../assets/images/logo.png";
import RectangleImage from "../../assets/images/Rectangle 3.png";
import bannerimg from "../../assets/images/banner-img.png";
import frame1 from "../../assets/images/Frame1.png";
import frame2 from "../../assets/images/Frame2.png";
import frame3 from "../../assets/images/Frame3.png";
import Rectangle1 from "../../assets/images/Rectangle1.png";
import Group8 from "../../assets/images/Group8.png";
import image5 from "../../assets/images/image5.png";
import Rectangle631 from "../../assets/images/Rectangle631.png";
import Frame348 from "../../assets/images/Frame348.png"
const Banner = () => {
  return (
    <>
      <div className="main_container">
        <div className="first_container">
          <img src={RectangleImage} alt="logo" />
          <div className="second_container">
            <img src={bannerimg} alt="logo" />
            <div className="nav_container">
              {/* <img src={logo} alt="logo"/> */}
              <ul className="nav_list">
                <li>Top</li>
                <li>For Everyone</li>
                <li>Features</li>
                <li>Preview</li>
                <li>License</li>
              </ul>
              <button>Download</button>
            </div>
            <div className="main_header">
              <h1>Beautiful Design For Social Media Content</h1>
              <p>
                Figma social media content templates for branding, marketing,
                insights, and more. Free for personal and commercial use!
              </p>
              <div className="btn">
                <button>Download Now</button>
                <button className="action_button">See in Action</button>
              </div>
            </div>
          </div>
        </div>
        <div className="second_header">
          <h2>
            Figma Social Feeds is designed for everyone.Use for whatever you
            want,
            <br /> it’s completely free!
          </h2>
        </div>
        <div className="small_box">
          <div className="small_box1">
            <img src={frame3} alt="frame3" />
            <h2>For Designer</h2>
            <p>
              Busy designers want to share insights, such as tips, tricks or
              other types of insights. Focus on content not on design.
            </p>
          </div>
          <div className="small_box2">
            <img src={frame1} alt="frame1" />
            <h2>For Coder</h2>
            <p>
              Coders who want to share snippets, tools, or tips and tricks. No
              design skills required: just duplicate, edit and export!
            </p>
          </div>
          <div className="small_box3">
            <img src={frame2} alt="frame2" />
            <h2>For Marketer</h2>
            <p>
              Busy designers want to share insights, such as tips, tricks or
              other types of insights. Focus on content not on design.
            </p>
          </div>
        </div>
        <div className="fourth_container"></div>
        <div className="box1">
          <h1>There are 80+ Pre-Designed Templates Ready to Use</h1>
          <p>
            Many design choices make it free for you to make a different design
            every time you post. There are 80+ designs with 10+ different
            layouts. Each layout has several designs with the same theme, just
            need to focus on the content!
          </p>
          <div className="box2">
            <p>
              Insights: create content that contains insights on design, coding,
              or recommendations for the best tourist attractions.
            </p>
            <p>
              Promotions: get more potential customers by making product or
              service promotions in a more attractive way.
            </p>
            <p>
              Much More: design more types of content with Social Feeds and
              increase followers on your social media accounts.
            </p>
          </div>
          <img src={Group8} alt="Group8" />
        </div>
        <div className="fifth_container">
          <div className="sb1">
            <h1>
              Optimized For Posts on All Social Media: Facebook, Instagram &
              Twitter
            </h1>
            <p>
              The design has an aspect ratio of 1:1 which the majority of social
              media recommends. The image quality is also high (1080 * 1080),
              you can further increase the image quality to 2x or more so that
              the design looks sharper.
            </p>
            <div className="sb_btn">
              <button>Preview For Instagram</button>
              <button>Preview For Facebook</button>
              <button>Preview For Twitter</button>
            </div>
          </div>
          <img src={image5} alt="image5" />
          <img src={Rectangle631} alt="Rectangle631" />
        </div>
        <div className="sixth_container">
          <div className="btn1">
            <button>DOWNLOAD</button>
          </div>
          <div className="b1">
            <h1>Download Figma Social Feeds Now</h1>
            <p>
              Figma Social Feeds is free for everyone, create content for
              promotion, share insights and get creative on the internet.
            </p>
          </div>
          <div className="btn2">
            <button>Download Now</button>
            <button>Say Thanks</button>
          </div>
        </div>
        <div className="footer">
          <div className="box">
            <div className="bb1">
              <img src={Frame348} alt="Frame348" />
              <h1>Wumbo</h1>
              <p>
                Wumbo is a team of creative developers who have an interest in
                design. We create design templates, UI kits and other products
                that make people's work easier and faster.
              </p>
              <p>COPYRIGHT © 2022 — DESIGN NAUVAL</p>
            </div>
            <div className="bb2">
              <h1>PRODUCTS</h1>
              <div className="grp1">
                <h3>Social Feeds</h3>
                <h3>React UI Kit</h3>
                <h3>Stisla Design</h3>
                <h3>More Products</h3>
              </div>
              <h1>COMPANY</h1>
              <div className="grp2">
                <h3>About Us</h3>
                <h3>Contact</h3>
                <h3>Privacy Policy</h3>
                <h3>Terms of Service</h3>
                <h3>Help</h3>
              </div>
              <h1>GET IN TOUCH</h1>
              <div className="grp3">
                <h3>Twitter</h3>
                <h3>Facebook</h3>
                <h3>Dribbble</h3>
                <h3>Terms of Service</h3>
                <h3>Help</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
