// Write your JS code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ProjectItem from '../ProjectItem'

import './index.css'

class Projects extends Component {
  state = {projectsList: [], projectName: '', projectInfo: '', projectLink: ''}

  onMoveToProjects = () => {
    const {history} = this.props
    history.replace('/projects')
  }

  onEnterProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  onEnterprojectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onEnterDescription = event => {
    this.setState({projectInfo: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {projectName, projectLink, projectInfo} = this.state
    const newObj = {
      id: uuidv4(),
      projectName,
      projectLink,
      projectInfo,
    }
    this.setState(prevState => ({
      projectsList: [...prevState.projectsList, newObj],
      projectName: '',
      projectLink: '',
      projectInfo: '',
    }))
  }

  render() {
    const {projectsList, projectName, projectInfo, projectLink} = this.state
    return (
      <>
        <div className="input-container">
          <h1 className="add-project">Add Project</h1>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label htmlFor="projectName" className="projectName">
              Project Name
            </label>
            <br />
            <input
              type="text"
              id="projectName"
              onChange={this.onEnterProjectName}
              value={projectName}
              className="input"
              placeholder="Project Name"
            />
            <br />
            <label htmlFor="projectLink" className="projectName">
              Project Link
            </label>
            <br />
            <input
              type="text"
              id="projectLink"
              onChange={this.onEnterprojectLink}
              value={projectLink}
              className="input"
              placeholder="Project Link"
            />
            <br />
            <label htmlFor="projectInfo" className="projectName">
              Description
            </label>
            <br />
            <textarea
              cols="25"
              rows="5"
              onChange={this.onEnterDescription}
              value={projectInfo}
            />
            <br />

            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
        <ul className="ul-container">
          {projectsList.map(item => (
            <ProjectItem key={item.id} project={item} />
          ))}
        </ul>
      </>
    )
  }
}

export default Projects
