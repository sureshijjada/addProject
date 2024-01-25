import './index.css'

const ProjectItem = props => {
  const {project} = props
  const {projectName, projectInfo, projectLink} = project
  console.log(projectLink)
  return (
    <li className="list-container">
      <h1 className="projectNameHeading">{projectName}</h1>
      <p className="projectInfoText">{projectInfo}</p>
      <a target="_blank" href={`//${projectLink}`} rel="noreferrer">
        <button type="button" className="aboutBtn">
          About Project
        </button>
      </a>
    </li>
  )
}

export default ProjectItem
