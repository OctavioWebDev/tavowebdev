import { Link } from 'react-router-dom'
import './index.scss';
import LogoO from '../../assets/images/logo-o.png'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoO} alt="logo" />
            <img src={LogoO} alt="logo" />
        </Link>
    </div>
)

export default Sidebar;