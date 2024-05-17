import AboutImage from '../../assets/about.png'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

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
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            My name is Alex Soto, passionate about web development, electronics and technologies.
          </p>
          <p>
          With a background in Electronic Engineering, 12+ years of experience in Information Technology, Networking and 1+ years of experience dedicated to the research and development of electronic devices for traffic control. My passion for programming was born at a very young age programming microcontrollers for my electronic projects, with the passing of time I saw the birth of IOT and I was impressed with all that can be created combining electronics and web development. 
          </p>
          <p>
          To turn my passion for programming into my daily work, I completed the Full-Stack Web Developer program at Career Foundry (Berlin, Germany), learning JavaScript, Node.js, Express, React, Angular NoSQL and much more.
          </p>
          <p>
          Originally from Peru, I was fortunate to live and work for many years in Italy as a Project Engineer and gain valuable experience in back-end development using C++ and C#. Now I am proud to live in Jacksonville, in the beautiful sunshine state of Florida, USA.
          </p>
          <p>
          Currently, I'm on the lookout for a role that values continuous learning and allows me to make meaningful contributions.
          </p>          
          <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About