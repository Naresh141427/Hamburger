import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <Link to="/NotFound" className="links">
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        className="notfound-icon"
        alt="not found"
      />
      <h1 className="not-found">Lost Your Way?</h1>
      <p className="description">
        Sorry, can't find that page. You'll find lots to explore on the home
        page
      </p>
    </div>
  </Link>
)

export default NotFound
