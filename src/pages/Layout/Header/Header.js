import { HiOutlineLogout } from 'react-icons/hi'
import './header.scss';
const Header = () => {
    return(
        <div className="Home">
        <nav class="navbar">
          <img className='logo' src="https://indiumsoftware.com/wp-content/uploads/2020/01/Indium-software-Logo.png" alt=""/>
          <button className='logout-button'><HiOutlineLogout  id='icon'/><b  id='icon_text'>Logout</b></button>
         
        </nav>
      </div>
    );


}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
