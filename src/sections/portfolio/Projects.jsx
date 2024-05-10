import Project from './Project'

const Projects = ({ projects }) => {
  return (
    <div className="portfolio__projects">
      {
        projects.map((project) => (
          <Project key={projects.id} project={project} />
        ))
      }

    </div>
  )
}

export default Projects