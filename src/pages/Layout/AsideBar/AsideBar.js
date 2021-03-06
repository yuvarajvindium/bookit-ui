import './AsideBar.scss';
import { NavLink } from 'react-router-dom';
const AsideBar  = () => {
    return(
       <div className='sidebar'>  
    <div id='sidenav_title'>BOOKIT</div>

    <NavLink to='/home' ><i class="bi bi-house-fill sidebaricon"></i>Home</NavLink>
   
    <NavLink to='/book-space' ><i class="bi bi-calendar4-week  sidebaricon"></i>BOOK</NavLink>

    <NavLink to='/home' ><i class="bi bi-calendar-check-fill sidebaricon"></i> Booking</NavLink>

  </div>);
   
    
}
AsideBar.propTypes = {};

AsideBar.defaultProps = {};

export default AsideBar;
