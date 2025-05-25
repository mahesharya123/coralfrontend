import React from 'react';
import './CSS/Services.css';
import restaurant1 from './img/image2.jpg';
import restaurant2 from './img/image3.jpg';
import room1 from './img/room1.jpg';
import room2 from './img/room2.jpg';
import party1 from './img/image3.jpg';
import party2 from './img/image2.jpg';

export const Services = () => {
  const services = [
    {
      title: "Restaurant",
      images: [restaurant1, restaurant2],
      description: "Experience fine dining with our world-class chefs and curated menus"
    },
    {
      title: "Luxury Rooms",
      images: [room1, room2],
      description: "Premium accommodations with stunning views and modern amenities"
    },
    {
      title: "Party Hall",
      images: [party1, party2],
      description: "Host memorable events in our spacious, fully-equipped banquet halls"
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Premium Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-image-grid">
              {service.images.map((img, imgIndex) => (
                <img 
                  key={imgIndex}
                  src={img} 
                  alt={service.title}
                  className={`grid-img-${imgIndex + 1}`}
                />
              ))}
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

