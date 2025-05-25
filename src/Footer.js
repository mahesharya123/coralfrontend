import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import './CSS/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="footer">
          <div className="footer_top padding-top-80 clearfix">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="/">
                    <img src={require('./img/site-logo.png')} alt="Hotel Logo" />
                  </a>
                </div>
                <p>CORAL CREEK<br></br>
                Best Luxury Resort with Restaurant , Rooms and PartyHall 
                </p>
               
                
                    <p>
                   
                 <a href='https://www.google.com/maps/place/OYO+61587+Coral+Creek+Resort/@12.177714,92.7872179,17z/data=!4m11!3m10!1s0x308f37d7893d6ce5:0x3fbcaa8f58c60e44!5m2!4m1!1i2!8m2!3d12.177714!4d92.7897928!9m1!1b1!16s%2Fg%2F11h5m8ls88?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D' style={{textDecoration:'none',color:'#a0a0a0'}}>  
                   1 Baratang, Great Trunk Rd, Port Blair,
                       Andaman and Nicobar Islands 744210</a>
                    </p>
                      
                  
               
              
                
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="row">
                <div className="footer_widget clearfix head">
                  <h5 className="ma">Quick Links</h5>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <ul>
                      <li><a href="/">Rooms</a></li>
                      <li><a href="/">Food & Drinks</a></li>
                      
                      <li><a href="/">Amenities</a></li>
                      <li>
          <a href="https://www.facebook.com/people/Coral-Creek-Resort/100083330514889/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF size={20} />
          </a></li>
          <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a></li>
          <li>
          <a href="https://www.instagram.com/_coral__creek?igsh=MXMza2V4dmZjNmJ4MQ==" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaInstagram size={20} />
          </a></li>
         
                    </ul>  
                  </div>
                  <div className="col-lg-6 col-md-6 sol-sm-6">
                
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="footer_widget">
                <h5>We Are Global</h5>
                <div className="footer_map">
                  <a href="/">
                    <img src={require('./img/footer-map-two.jpg')} alt="World Map" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="footer_copyright margin-tb-50 content-center">
                <p>© 2025 <a href="/">Coral_Creek</a>. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
