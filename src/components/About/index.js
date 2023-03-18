import {Link} from 'react-router-dom'
import './index.css'

const About = () => (
  <Link to="/about" className="links">
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="home-icon"
        alt="about"
      />
    </div>
  </Link>
)

export default About
