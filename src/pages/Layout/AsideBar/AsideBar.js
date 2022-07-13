import {ImHome} from 'react-icons/im'
import {FaCalendarAlt, FaCalendarCheck} from'react-icons/fa';
import './AsideBar.scss';
import { Link } from 'react-router-dom';
const AsideBar  = () => {
    return(
       <div className='sidebar'>  
    <div id='sidenav_title'>BOOKIT</div>
    <Link className='active' to='/'> <ImHome id='sidebaricon'/>Home</Link>

    <Link  to ='/book-space'> <FaCalendarAlt id='sidebaricon' />BOOK</Link>

    <Link  to='/bookings'> <FaCalendarCheck id='sidebaricon' />My Booking</Link>

  </div>);
   
    
}
AsideBar.propTypes = {};

AsideBar.defaultProps = {};

export default AsideBar;
