import AboutImage from "../../assets/about.png";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="AboutImage" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            My name is Alex Soto, passionate about Web Development and
            Technology.
          </p>
          <p>
            With a background in Electronic Engineering, IT, and Networking. My
            passion for programming was born at a very young age programming
            microcontrollers for my electronic projects. Witnessing the rise of
            IoT, I became fascinated by the potential of combining electronics
            with web development.
          </p>
          <p>
            To turn my passion for programming into my daily work,{" "}
            <b>I completed the Full-Stack Web Development</b> program at Career
            Foundry (Berlin, Germany), learning <b>JavaScript</b>,{" "}
            <b>Bootstrap</b>, <b>React.js</b>, <b>Angular.js</b>, <b>Node.js</b>
            ,<b>Express.js</b>, <b>MongoDB</b>, <b>PostgreSQL</b> and much more.
          </p>
          <p>
            Originally from Peru, I was fortunate to live and work for many
            years in Italy as a Project Engineer and gain valuable experience in
            back-end development using C++ and C#. Now I am proud to live in
            Jacksonville, in the beautiful sunshine state of Florida, USA, am
            eager to leverage my skills in a dynamic team to build scalable,
            user-centric web solutions that enhance user experience and drive
            business success.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
