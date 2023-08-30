import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import {useState} from 'react'
import LogoO from '../../assets/images/logo_o.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, 
    faUser, 
    faEnvelope, 
    faSuitcase, 
} 
from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebook, 
    faGithub, 
    faLinkedin, 
    faYoutube 
} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className="nav-bar">
        <Link 
            className='logo' 
            to='/'
            onClick={() => setShowNav(true)}>  
            <img 
            src={LogoO} 
            alt="logo" />
            <img 
            className="sub-logo" 
            src={LogoSubtitle} 
            alt="octavio" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink 
            activeclassname="active" 
            className="about-link" 
            to="/about"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        
        <NavLink 
            activeclassname="active" 
            className="portfolio-link" 
            to="/portfolio"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
            
        </nav>
        <ul>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/octaviovsanchez/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://github.com/babotavo419'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.facebook.com/profile.php?id=100091293243371'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.youtube.com/channel/UCsB0QyKYCrPoP0rmoqi99-w'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar;