// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="unordList">
      <li className="list">
        <Link to="/">Home</Link>
      </li>
      <li className="list">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="list">
        <Link to="/about">About</Link>
      </li>
      <li className="list">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
