import React from 'react';
// import PropTypes from 'prop-types';
import './Home.scss';
let content = "7th jul 2022 to 11 jul 2022  \"Kay ARR Royal\" Stone Tech Park \"BOOKit\" project";
let footer_content = "Kay ARR Royal Stone Tech Park, Benniganahalli, No.100, Old Madras Rd, Pai Layout, Mahadevapuram, Bengaluru, Karnataka 560016";
const Home = () => (

  <>
  <div className="Home">
    <nav class="navbar">
      <img className='logo' src="https://www.shalitha.info/assets/img/portfolio/bookit/logo.png" alt=""/>
      <h5 className='userTitle'>Welcome User</h5>
    </nav>

    <nav class="navbar navbar-light bg-light nav-buttons">
      <ul class="nav navbar-nav mx-auto">
        <li class="nav-item">  
        <form class="form-inline">
            <button class="btn btn-primary active">Home</button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;
            <button  class="btn btn-primary">Book</button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;
            <button  class="btn btn-primary">My Bookings</button>
        </form></li>
      </ul>
    </nav>
  </div>
  <br/><br/><br/>
  <div class="card card-body-style" >
  <div class="card-header card-header-style">
    Upcoming Bookings
  </div>
  <div class="card-body  ">
    <blockquote class="blockquote mb-0">
      <p>{content}</p>
      <br/>
        <footer class="blockquote-footer">Location: <br/> <cite title="Source Title">{footer_content}</cite></footer>
      
    </blockquote>
  </div>
</div>
</>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
