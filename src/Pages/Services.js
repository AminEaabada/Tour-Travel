import React from 'react'

function Services() {
    const styles = {
        marginTop: "500px" ,
    }
  return (
    <section className="services" id="services" style={styles}>

    <h1 className="heading">
        <span>O</span>
        <span>u</span>
        <span>r</span>
        <span className="space"></span>
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
    </h1>

    <div className="box-container">

        <div className="box">
            <i className="fas fa-hotel"></i>
            <h3>affordable hotels</h3>
            <p> Rest easy with our affordable hotel options.
                Get comfortable accommodations without breaking the bank.
                Whether you're traveling solo or with a group, we've got budget-friendly options for every traveler.</p>
        </div>
        <div className="box">
            <i className="fas fa-utensils"></i>
            <h3>food and drinks</h3>
            <p> LSavor the flavors of the world with our food and drink tours.
                Taste local cuisine and sample regional specialties.
                From street food to fine dining, we'll take you on a culinary journey you'll never forget.</p>
        </div>
        <div className="box">
            <i className="fas fa-bullhorn"></i>
            <h3>safty guide</h3>
            <p> Stay safe and secure on your travels with our expert safety guides.
                Learn how to avoid common travel scams and stay aware of your surroundings.
                Our safety guides will give you peace of mind and help you enjoy your trip to the fullest.</p>
        </div>
        <div className="box">
            <i className="fas fa-globe-asia"></i>
            <h3>around the world</h3>
            <p> See the world and experience new cultures with our around the world tours.
                Visit multiple countries and continents in one trip.
                From ancient landmarks to modern cities, there's something for everyone.</p>
        </div>
        <div className="box">
            <i className="fas fa-plane"></i>
            <h3>fastest travel</h3>
            <p> Get to your destination quickly and efficiently with our express travel options. with
                Save time and avoid the hassle of long layovers and delays.
                Whether you are traveling for business or leisure, we will get to you in no time.</p>
        </div>
        <div className="box">
            <i className="fas fa-hiking"></i>
            <h3 >adventures</h3>
            <p> Experience the thrill of a lifetime with our adventure tours. And
                Explore the great outdoors and discover new horizons.
                From hiking and camping to extreme sports, we've got you covered.</p>
        </div>

    </div>

</section>
  )
}

export default Services
