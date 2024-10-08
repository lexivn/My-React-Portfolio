import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className='portfolio__project-image'>
        <img src={project.image} alt="Portfolio Project Img" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopner noreferrer"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          GitHub
        </a>
        {project.studycase ? 
        (
        <a
         href={project.studycase}
         className="btn sm secondary"
         target="_blank"
         rel="noopner noreferrer"
         >
          Study Case
         </a>
        ):(<p></p>)}
        
      </div>
    </Card>
  );
};

export default Project;
