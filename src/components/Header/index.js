import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'
import {Link} from 'react-router-dom'

import {AiOutlineMenu, AiOutlineClose, AiTwotoneHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

const Header = () => (
  <nav className="nav-bar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="website"
      className="website"
    />

    <Popup
      modal
      trigger={
        <div className="menu-bar">
          <AiOutlineMenu className="icon" />
        </div>
      }
    >
      {close => (
        <>
          <div className="features-container ">
            <Link to="/home" className="links">
              <AiTwotoneHome className="home" />
              <p className="link-title">Home</p>
            </Link>
            <Link to="/about" className="links">
              <BsFillInfoCircleFill className="home" />
              <p className="link-title">About</p>
            </Link>
          </div>

          <button type="button" className="close-icon" onClick={close}>
            <AiOutlineClose className="home" />
          </button>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
