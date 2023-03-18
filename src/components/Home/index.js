import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <Link to="/" className="links">
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-icon"
        alt="home"
      />
    </div>
  </Link>
)

export default Home
