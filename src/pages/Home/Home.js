import React from 'react';
// import PropTypes from 'prop-types';
import './Home.scss';
// import { logout } from "react-icons/";
import { HiOutlineLogout } from 'react-icons/hi'
import {ImHome} from 'react-icons/im'
import {FaCalendarAlt, FaCalendarCheck} from'react-icons/fa';

let name = "Name!"

// let content = "7th jul 2022 to 11 jul 2022  \"Kay ARR Royal\" Stone Tech Park \"BOOKit\" project";
// let footer_content = "Kay ARR Royal Stone Tech Park, Benniganahalli, No.100, Old Madras Rd, Pai Layout, Mahadevapuram, Bengaluru, Karnataka 560016";
 const Home = () => (

<>
  <div className="Home">
    <nav class="navbar">
      <img className='logo' src="https://indiumsoftware.com/wp-content/uploads/2020/01/Indium-software-Logo.png" alt=""/>
      <span  id='icon_text'><HiOutlineLogout  id='icon'/><b  id='icon_text'>Logout</b></span>
    </nav>
  </div>
 
  <div className='sidebar'>  
  <div id='sidenav_title'>BOOKIT</div>
  <a class="active" href="#home"><ImHome id='sidebaricon'/>Home</a>
  <a href="#book"><FaCalendarAlt id='sidebaricon' />BOOK</a>
  <a href="#mybooking"><FaCalendarCheck id='sidebaricon' />My Booking</a>
</div>

<div id = 'usertitle' class="center">
  <p id='textalign'>Welcome back <b id='highlightbycolor'>{name} </b> </p>
</div>

<div class="center">
   <p id='highlightbycolor' className='headings'><b>UPCOMMING BOOKINGS</b></p>
     <div class="col-sm-4">
        <div class="card">     
        <div class="card-body">
        <h5 class="card-title">Team meeting(BookIt project)</h5>    
       <p> Booked for 8 work spaces from 7th jul to 10 jul 2022.</p>  
        <p>Kay ARR Royal Stone Tech Park, Benniganahalli, No.100, Old Madras Rd, Pai Layout, Mahadevapuram, Bengaluru</p>        
        </div>     
      </div>
    </div>
</div>

<div class="center">
   <p id='highlightbycolor' className='headings'><b>RECENT BOOKINGS</b></p>
   <div class="row">
    <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title">EAS Meeting</h5>
            <p class="card-text">Booked for 15 workspaces from jul 11th to 14th 2022.</p>
            <p class="card-text">Ganesh Chambers, Old No. 143, New No. 64, Eldams Rd, Venus Colony, Teynampet, Chennai.</p>
            </div>        
        </div>
      </div>    
      <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title">EAS</h5>
            <p class="card-text">Booked for 5 workspaces from jul 15th to 18th 2022.</p>
            <p class="card-text">Ganesh Chambers, Old No. 143, New No. 64, Eldams Rd, Venus Colony, Teynampet, Chennai.</p>
            </div>        
        </div>
      </div> 
      <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title">Team Meet</h5>
            <p class="card-text">Booked for 15 workspaces from jul 20th to 25th 2022.</p>
            <p class="card-text">Ganesh Chambers, Old No. 143, New No. 64, Eldams Rd, Venus Colony, Teynampet, Chennai.</p>
            </div>        
        </div>
      </div> 
   </div>
   
</div>


 


 </>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
