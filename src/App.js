// App.js
import React, { useState } from 'react';
import './App.css';
import logo from './img/site-logo.png';
import calllogo from './img/call-icon.png';
import {HeroSlider} from './HeroSlider';
import {Services} from './Services';
import { Footer } from './Footer';
import room1 from './img/room1.jpg';
import room2 from './img/room2.jpg';
import room3 from './img/room3.jpg';




function App() {
  
  return (
    <div className="App">
      <Header />
      <HeroSlider />

      <BookingForm />
      <Services/>
      <RoomsSection />
      <Footer/>
    </div>
  );
}

// Header Component
const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   

// Toggle Services submenu manually in mobile
const handleServicesClick = (e) => {
  e.preventDefault(); // Prevent page navigation
  setIsServicesOpen(!isServicesOpen);
};

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between text-light">
            <div> 
                 <img src={calllogo} alt="call Logo" height="16"  style={{marginRight:'4px'}}/>
              +123 456 7890
              </div>
            <div>
              <a href="/" className="text-light mx-3">Login</a>
              <a href="/" className="text-light">Register</a>
            </div>
          </div>
        </div>
      </div>
      
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container ">
          <div className='navlist'>
  <div className="logo-container">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Hotel Logo" height="40" />
    </a>
  </div>
       
    <button className="navbar-toggler" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  ☰
</button>

<nav className={`navigation-menu ${isMenuOpen ? 'active' : ''}`}>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        
        <li 
  className={`nav-item dropdown ${isServicesOpen ? 'open' : ''}`}
  onMouseEnter={() => window.innerWidth > 768 && setIsServicesOpen(true)}
  onMouseLeave={() => window.innerWidth > 768 && setIsServicesOpen(false)}
>
  <a
    href="/"
    className="nav-link dropdown-toggle"
    onClick={handleServicesClick}
    aria-haspopup="true"
    aria-expanded={isServicesOpen}
  >
    Services
  </a>
  <ul className={`dropdown-menu`}>
    <li><a className="dropdown-item" href="/rooms">Rooms</a></li>
    <li><a className="dropdown-item" href="/party-hall">Party Hall</a></li>
    <li><a className="dropdown-item" href="/restaurants">Restaurants</a></li>
  </ul>
</li>


        <li className="nav-item"><a href="/" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
      </ul>
    </nav>
</div>
          </div>
        </nav>
      </header>
     
    </>
  );
};

// Hero Section Component

// Booking Form Component
const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    rooms: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container" style={{ marginTop: '0px',  background:'#313a45' }}>
      <div className="booking-form">
        <form className="row align-items-end" onSubmit={handleSubmit}>
          <div className="col-md-3">
            <label>Check In</label>
            <input 
              type="date" 
              className="form-control"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label>Check Out</label>
            <input 
              type="date" 
              className="form-control"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label>Guest</label>
            <select 
              className="form-control"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
            </select>
          </div>
              
          <div className="col-md-2">
            <label>Rooms</label>
            <select 
              className="form-control"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
            >
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>
          </div>
          <div className="col-md-2">
            <button type="submit"style={{backgroundColor:'yellow' ,color:'black',borderRadius:'20px'}} className=" btn-primary btn  btn-block ">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Rooms Section Component
const RoomsSection = () => {
  const [rooms] = useState([
    { id: 1, title: 'Deluxe Room', price: 3500, image: room1 },
    { id: 2, title: 'Semi Delux Room', price: 2975, image: room2 },
    { id: 3, title: 'Presidential Suite', price: 4000, image: room3 }
  ]);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center">SELECT YOUR ROOM</h2>
        <div className="row">
          {rooms.map(room => (
            <div key={room.id} className="col-lg-4 mb-4">
              <div className="room-card">
                <img src={room.image} className="img-fluid" alt={room.title} />
                <div className="p-4">
                  <h3>{room.title}</h3>
                  <p>Starting from Rs {room.price}/night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;