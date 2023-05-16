// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// function PlaceDetails({ placeId }) {
//   // fetch the details for the selected place using the placeId prop
//   // render the details on the page
//   return (
//     <>
//     <Header />
//     <section class="PlaceDetails" id="PlaceDetails">

//         <h1 class="heading">
//            <span> More Information About Isla Mujeres </span>
//         </h1>

//         <div class="box-container">
//             <div className="box">
//                 <img src="images/-travel-.jpg" alt=""/>
//                 <div className="content">
//                     <h3>Isla Mujeres</h3>
//                     <p>Most Beautiful Islands in Mexico.</p>
//                     <Link to='/Gallery' className="btn">Go Back</Link>
//                 </div>
//             </div>
//         </div>
//         </section>
//         </>
//   );
// }

// export default PlaceDetails;




import { Link, useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import '../popup.css';


const PlaceDetails = (props) => {

  const [places, setPlaces] = useState([]);


console.log(props.place)

  return (
    <>
      <Header />

      <section className="PlaceDetails" id="PlaceDetails">
        <div className="box-container">
        <h1 className="heading">
                <span>P</span>
                <span>l</span>
                <span>a</span>
                <span>c</span>
                <span>e</span>
                <span class="space"></span>
                <span>D</span>
                <span>e</span>
                <span>t</span>
                <span>a</span>
                <span>i</span>
                <span>l</span>
                <span>s</span>
            </h1>
          <div className="box">
              <img src={props.place.image} alt={props.place.title} />
            <div className="content">
              <h2>{props.place.title}</h2>
              <p>{props.place.description}</p>
              <button>
                <Link to="/Gallery" className="btn">Go Back</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceDetails;


