import React,{useState} from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { auth} from "../../firebase";
import { signOut } from "firebase/auth";
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
import Frame348 from "../../assets/images/Frame348.png";
import download from "../../assets/images/download.png";
import playcircle from "../../assets/images/play-circle.png";
import Rectangle623 from "../../assets/images/Rectangle623.png";
import Rectangle621 from "../../assets/images/Rectangle621.png";
import Rectangle622 from "../../assets/images/Rectangle622.png";
import arrowright from "../../assets/images/arrow-right.png";
import arrowright1 from "../../assets/images/arrowright1.png";
import Vector from "../../assets/images/Vector.png";
import Vector1 from "../../assets/images/Vector1.png";
import tweetnow from "../../assets/images/tweetnow.png";
const Banner = () => {
  const [isAuth, setIsAuth] = useState("false");
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
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
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                {/* <li>Features</li>
                <li>Preview</li>
                <li>License</li> */}
              </ul>
              {/* <button>
                <a type="button" href="login">
                  {" "}
                  Login/Signup
                </a>
              </button> */}
              {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={signUserOut}>Login/Signup</button>
        )}

              {/* <button>
              <Link to="/post">Post</Link>
              </button> */}
            </div>
            <div className="main_header">
              <h1>Beautiful Design For Social Media Content</h1>
              <p>
                Figma social media content templates for branding, marketing,
                insights, and more. Free for personal and commercial use!
              </p>
              <div className="btn">
                {/* <img src={download} alt="download" /> */}
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
        </div>
        <div className="box2">
          <div className="bx3">
            <p>
              <img src={Rectangle623} alt="Rectangle623" />
              <span>Insights:</span> create content that contains insights on
              design, coding, or recommendations for the best tourist
              attractions.
            </p>
            <br />
            <p>
              <img src={Rectangle623} alt="Rectangle623" />
              <span>Promotions:</span> get more potential customers by making
              product or service promotions in a more attractive way.
            </p>
            <br />
            <p>
              <img src={Rectangle623} alt="Rectangle623" />
              <span>Much More:</span> design more types of content with Social
              Feeds and increase followers on your social media accounts.
            </p>
            <div className="bx3_img">
              <img src={Group8} alt="Group8" />
              <div className="box22">
                <img src={Rectangle621} alt="Rectangle621" />
              </div>
              <div className="box23">
                <img src={Rectangle622} alt="Rectangle622" />
              </div>
            </div>
          </div>
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
              <div className="sb_btn1">
                <button>
                  Preview For Instagram
                  <img src={arrowright} alt="arrowright" />
                </button>
              </div>
              <div className="sb_btn2">
                <button>
                  Preview For Facebook
                  <img src={arrowright1} alt="arrowright1" />
                </button>
                <button>
                  Preview For Twitter
                  <img src={arrowright1} alt="arrowright1" />
                </button>
              </div>
            </div>
          </div>

          <div className="bx3_img1">
            <img src={image5} alt="image5" />
            <div className="box24">
              <img src={Rectangle631} alt="Rectangle631" />
            </div>
          </div>
        </div>
        <div className="sixth_container">
          <div className="btn1">
            <button>DOWNLOAD</button>
          </div>
          <div className="b1">
            <h1>
              Download Figma <span>Social Feeds</span> Now
            </h1>
            <p>
              Figma Social Feeds is free for everyone, create content for
              promotion, share insights and get creative on the internet.
            </p>
          </div>
          <div className="btn2">
            <div className="btn_21">
              <button>
                <img src={download} alt="download" />
                Download Now
              </button>
            </div>
            <div className="btn_22">
              <button>
                Say Thanks
                <img src={Vector} alt="Vector" />
              </button>
            </div>
            <div className="btn2_img1">
              <img src={Vector1} alt="Vector1" />
            </div>
            <div className="btn2_img2">
              <img src={tweetnow} alt="tweetnow" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="bb2">
            <div className="bb1_img1">
              <img src={Frame348} alt="Frame348" />
            </div>
            <h1>Wumbo</h1>
            <p>
              Wumbo is a team of creative developers who have an interest in
              design. We create design templates, UI kits and other products
              that make people's work easier and faster.
            </p>
            <div className="para">
              <p>COPYRIGHT © 2022 — DESIGN NAUVAL</p>
            </div>
          </div>
          <div className="bb2">
            <h1>PRODUCTS</h1>
            <div className="grp1">
              <h3>Social Feeds</h3>
              <h3>React UI Kit</h3>
              <h3>Stisla Design</h3>
              <h3>More Products</h3>
            </div>
          </div>
          <div className="bb2">
            <h1>COMPANY</h1>
            <div className="grp2">
              <h3>About Us</h3>
              <h3>Contact</h3>
              <h3>Privacy Policy</h3>
              <h3>Terms of Service</h3>
              <h3>Help</h3>
            </div>
          </div>
          <div className="bb2">
            <h1>GET IN TOUCH</h1>
            <div className="grp3">
              <h3>Twitter</h3>
              <h3>Facebook</h3>
              <h3>Dribbble</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
