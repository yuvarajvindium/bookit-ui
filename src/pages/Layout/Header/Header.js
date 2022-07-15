import './header.scss';
const Header = () => {
    return(
        <div className="Home">
        <nav className="navbar">
          <img className='logo' src="https://indiumsoftware.com/wp-content/uploads/2020/01/Indium-software-Logo.png" alt=""/>
          <button className='logout-button'><i class="bi bi-box-arrow-right"></i><b  id='icon_text'>Logout</b></button>
         
        </nav>
      </div>
    );


}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
