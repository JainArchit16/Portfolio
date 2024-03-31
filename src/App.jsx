// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import Typed from "typed.js";
import dots from "./images/userAsset/dots.png";
import cube from "./images/userAsset/cube.png";
import circle from "./images/userAsset/circle.png";
import zigzags from "./images/userAsset/zigzags.png";
import plus from "./images/userAsset/plus.png";
import html from "./images/stack/HTML.png";
import cssImage from "./images/stack/CSS.png";
import javascriptImage from "./images/stack/Javascript.svg";
import expressImage from "./images/stack/Express.png";
// import nextjsImage from "./images/stack/NextJsCircle.png";
import tailwindImage from "./images/stack/Tailwind.png";
import nodejsImage from "./images/stack/NodeJs.svg";
import mongodbImage from "./images/stack/MongoDB.svg";
import reduxImage from "./images/stack/Redux.svg";
import vercelImage from "./images/stack/Vercel.svg";

import blobVectorImage from "./images/userAsset/blob vector.png";
import htmlImage from "./images/stack/HTML.png";

import reactImage from "./images/stack/React.png";
import nextImage from "./images/stack/Next.svg";

import bootstrapImage from "./images/stack/Bootstrap.svg";
import materialUIImage from "./images/stack/MaterialUI.svg";
import gitImage from "./images/stack/Git.svg";
import githubImage from "./images/stack/Github.svg";
import "@fortawesome/fontawesome-free/css/all.css";
import toast from "react-hot-toast";

function App() {
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Competitive Programmer",
        "BlockChain Enthusiast",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typeData.destroy();
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://portfolio-backend-g94j.onrender.com/api/v1/mail/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <div id="wrapper">
        <header>
          <div className="logo">
            <img
              src="https://media.istockphoto.com/id/668023344/vector/letter-abstract-icon-black-and-white-icon.jpg?s=612x612&w=0&k=20&c=dpdM3qQpijgWP6TZDbMTug6LHjGKQxenwrDcRR7IJiE="
              alt="#"
              className="rounded-full w-2"
            />
            <h2 className="logoText mx-1">rchit Jain</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contactMe">Contact Me</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Other sections (Hero, Projects, Skills, Contact Me, Footer) go here */}

        <section className="heroSection">
          <h3 className="fadedText absolute">Archit Jain</h3>
          <div className="infoContainer">
            <div className="heading">Hi! Archit Jain</div>
            <div className="heading subHeading">
              I am a <span className="role"></span>
            </div>
            <p className="desc">
              I’m a web developer and here is my portfolio website. Here you’ll
              learn about me as a web developer.
            </p>
            <div className="btn">
              <a
                href="https://www.linkedin.com/in/architjain16/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Me
              </a>
            </div>
          </div>
          <div className="imgContainer">
            <div className="absolute icons iconDots">
              <img src={dots} alt="" />
            </div>
            <div className="absolute icons icon-cube">
              <img src={cube} alt="" />
            </div>
            <div className="absolute icons icon-circle">
              <img src={circle} alt="" />
            </div>
            <div className="absolute icons iconZigZag">
              <img src={zigzags} alt="" />
            </div>
            <div className="absolute icons icon-plus">
              <img src={plus} alt="" />
            </div>
            <div className="">
              <div className="userImage">
                <img src="./Images/userAsset/priyansh.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projectSection">
          <h2 className="projectTitle">Projects</h2>
          <div className="projectContainer">
            <div className="projectCard" id="project1">
              <div className="projectNumber rightNumber">01</div>
              <div className="projectContent leftProjectContent">
                <div className="projectSkillsContainer">
                  <img className="projectSkill" src={html} alt="" />
                  <img className="projectSkill" src={cssImage} alt="CSS" />
                  <img
                    className="projectSkill"
                    src={javascriptImage}
                    alt="JavaScript"
                  />
                  <img
                    className="projectSkill"
                    src={expressImage}
                    alt="Express"
                  />
                  {/* <img
                    className="projectSkill"
                    src={nextjsImage}
                    alt="Next.js"
                  /> */}
                  <img
                    className="projectSkill"
                    src={tailwindImage}
                    alt="Tailwind CSS"
                  />
                  <img
                    className="projectSkill"
                    src={nodejsImage}
                    alt="Node.js"
                  />
                  <img
                    className="projectSkill"
                    src={mongodbImage}
                    alt="MongoDB"
                  />
                  <img className="projectSkill" src={reduxImage} alt="Redux" />
                  <img
                    className="projectSkill"
                    src={vercelImage}
                    alt="Vercel"
                  />
                </div>
                <h2 className="projectHeading">Study Notion</h2>
                <p className="projectSubHeading">
                  It's a EdTech Platform which provide you with instructor as
                  well as student functionality
                </p>
                <div className="btnGroup">
                  <a
                    href="https://github.com/JainArchit16/Ed-Tech"
                    className="btnGroup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btnProject">Read More</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="projectCard" id="project2">
              <div className="projectNumber leftNumber">02</div>
              <div className="projectContent rightProjectContent">
                <div className="projectSkillsContainer">
                  <img className="projectSkill" src={html} alt="" />
                  <img className="projectSkill" src={cssImage} alt="CSS" />
                  <img
                    className="projectSkill"
                    src={javascriptImage}
                    alt="JavaScript"
                  />
                  <img
                    className="projectSkill"
                    src={expressImage}
                    alt="Express"
                  />
                  {/* <img
                    className="projectSkill"
                    src={nextjsImage}
                    alt="Next.js"
                  /> */}
                  <img
                    className="projectSkill"
                    src={tailwindImage}
                    alt="Tailwind CSS"
                  />
                  <img
                    className="projectSkill"
                    src={nodejsImage}
                    alt="Node.js"
                  />
                  <img
                    className="projectSkill"
                    src={mongodbImage}
                    alt="MongoDB"
                  />
                  <img className="projectSkill" src={reduxImage} alt="Redux" />
                  <img
                    className="projectSkill"
                    src={vercelImage}
                    alt="Vercel"
                  />
                  <img
                    className="projectSkill"
                    src="https://www.svgrepo.com/show/353735/firebase.svg"
                    alt="Firebase"
                  />
                </div>
                <h2 className="projectHeading">Safe Passage</h2>
                <p className="projectSubHeading">
                  A platform to enhace highway security and provide
                  instantaneous help in case of road accidents
                </p>
                <div className="btnGroup">
                  <a
                    href="https://github.com/JainArchit16/SafePassageMain"
                    className="btnGroup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btnProject">Read More</button>
                    <a
                      href="https://safe-passage.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        title="Live Link"
                        className="fa-solid fa-link icon"
                      ></i>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skillContainer" id="skills">
          <div className="skillFadedText absolute mr-32">Skills</div>
          <div className="leftSkillContainer">
            <h2 className="skillHeading">
              <span>M</span>e and <br />
              MyTech Stack
            </h2>
            <div className="skillSubHeading">
              <p>
                Hi! My name is Archit Jain I am a Full Stack Web Developer
                Currently I am working on MERN Stack and Making Beautiful
                websites
              </p>
            </div>
          </div>

          <div className="rightSkillContainer">
            <img src={blobVectorImage} className="blobStyle" alt="" />
            <img src={htmlImage} alt="" className="skillsLogo" />
            <img src={cssImage} alt="" className="skillsLogo" />
            <img src={javascriptImage} alt="" className="skillsLogo" />
            <img src={reactImage} alt="" className="skillsLogo" />
            <img src={nodejsImage} alt="" className="skillsLogo" />

            <img src={reduxImage} alt="" className="skillsLogo" />
            <img src={tailwindImage} alt="" className="skillsLogo" />
            <img src={bootstrapImage} alt="" className="skillsLogo" />
            <img src={materialUIImage} alt="" className="skillsLogo" />
            <img src={expressImage} alt="" className="skillsLogo" />
            <img src={gitImage} alt="" className="skillsLogo" />
            <img src={githubImage} alt="" className="skillsLogo" />

            <img src={mongodbImage} alt="" className="skillsLogo" />
            <img src={vercelImage} alt="" className="skillsLogo" />
            <img
              src="https://www.svgrepo.com/show/353735/firebase.svg"
              className="skillsLogo"
            />
          </div>
        </section>

        <section className="contactMeSection" id="contactMe">
          <div className="container">
            <h2>Contact Me</h2>
            <h3>Questions, Thoughts, Or Just Want To Say Hello?</h3>

            <div className="contactUsForm">
              <form onSubmit={handleSubmit}>
                <div className="formFieldContainer">
                  <input
                    className="formField"
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formFieldContainer">
                  <input
                    className="formField"
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formFieldContainer">
                  <textarea
                    className="formField"
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="formBtn">
                  <button type="submit" className="btn" id="submit-btn">
                    Send Message
                    <i className="submit-icon fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container footerContainer">
            <div className="footerFadedText">Archit Jain</div>
            <div className="linkContainer">
              <div>
                <a href="#projects">Projects</a>
              </div>
              <div>
                <a href="#skills">Skills</a>
              </div>
              <div>
                <a href="#contactMe">Contact Me</a>
              </div>
            </div>
            <div className="iconContainer">
              <a href="https://www.linkedin.com/in/architjain16/">
                <i className="fab fa-linkedin icon"></i>
              </a>
              <a href="https://github.com/JainArchit16">
                <i className="fab fa-github icon"></i>
              </a>
              <a href="mailto:jainarchit1604@gmail.com">
                <i className="far fa-envelope icon"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
