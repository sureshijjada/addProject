// Write your JS code here

import './index.css'

const Home = props => {
  const onMoveToProjects = () => {
    const {history} = props
    history.replace('/projects')
  }
  return (
    <>
      <div className="home-container">
        <div className="card">
          <p className="ui-text">UI/UX DESIGNER</p>
          <h1 className="heading">Hello my name is Suresh</h1>
          <p className="text">
            Short text with details about you, what you do are your professional
            carrer.You can add more infomation about this page.
          </p>
          <div className="home-subcard">
            <button type="button" className="btn" onClick={onMoveToProjects}>
              Projects
            </button>
            <button type="button" className="btn">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
