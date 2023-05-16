import React from 'react'
import Destinations from './Destinations';
import Services from './Services';

function Footer() {
  return (
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>about us</h3>
            <p>Welcome to our tour and travel company! We are a team of experienced travel professionals
                 who are passionate about creating unforgettable travel experiences for our clients.
                  Our mission is to provide you with the highest level of service and attention to detail, 
                  so that you can relax and enjoy your trip to the fullest. Whether you're looking for 
                  a romantic getaway, a family vacation, or an adventure-packed tour, we have the expertise 
                  and resources to make it happen. With our extensive network of partners and suppliers, 
                  we can offer you the best deals on flights, hotels, tours, and activities. 
                  We believe that travel is not just about visiting new places, 
                  but also about creating lasting memories and connections with people and cultures around the world.
                 Let us help you plan your next adventure and discover the world in a whole new way!</p>
        </div>
        <div className="box">
            <h3>branch locations</h3>
            <a href="#">Africa</a>
            <a href="#">india</a>
            <a href="#">USA</a>
            <a href="#">japan</a>
            <a href="#">france</a>
        </div>
        <div className="box">
            <h3>quick links</h3>
            <a href="#home">home</a>
            <a href="#Services">Services</a>
            <a href="/#packages">Destinations</a>
            <a href="#services">services</a>
            <a href="#gallery">gallery</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>
        </div>
        <div className="box">
            <h3>follow us</h3>
            <a href="">facebook</a>
            <a href="">instagram</a>
            <a href="">twitter</a>
            <a href="">linkedin</a>
        </div>

    </div>

    <h1 className="credit"> created by <span> Mr. Amine AABADA </span> | © [2023] [Tour And travel]. All rights reserved. </h1>

</section>
  )
}

export default Footer
