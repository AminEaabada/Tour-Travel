// import React from 'react'
// import { Link } from 'react-router-dom';
// import PlaceDetails from './PlaceDetails'

// function Gallery() {
//   return (


// <section className="gallery" id="gallery">

//     <h1 className="heading">
//         <span>g</span>
//         <span>a</span>
//         <span>l</span>
//         <span>l</span>
//         <span>e</span>
//         <span>r</span>
//         <span>y</span>
//     </h1>

//     <div className="box-container">

//         <div className="box">
//             <img src="images/-travel-.jpg" alt=""/>
//             <div className="content">
//                 <h3>Isla Mujeres</h3>
//                 <p>Most Beautiful Islands in Mexico.</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/Diamond.jpg" alt=""/>
//             <div className="content">
//                 <h3>Hawaii Island </h3>
//                 <p>the largest and youngest island in the Hawaiian archipelago, 
//                     featuring active volcanoes, stunning beaches, and diverse natural landscapes..</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/g-3.jpg" alt=""/>
//             <div className="content">
//                 <h3>Greek civilization </h3>
//                 <p>come to visit Greece for see her rich history, beautiful
//                      Mediterranean climate, iconic architecture, and stunning landscapes..</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/g-4.jpg" alt=""/>
//             <div className="content">
//                 <h3>amazing places</h3>
//                 <p>Come see one of the oldest Ancient civilizations, famous monuments such as the pyramids 
//                     and the Sphin..</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/g-5.jpg" alt=""/>
//             <div className="content">
//                 <h3>amazing places</h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/g-6.jpg" alt=""/>
//             <div className="content">
//                 <h3>amazing places</h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/g-7.jpg" alt=""/>
//             <div className="content">
//                 <h3>amazing places</h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/g-8.jpg" alt=""/>
//             <div className="content">
//                 <h3>amazing places</h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
//                 <Link to='/PlaceDetails' className="btn">see more</Link>
//             </div>
//         </div>
//         <div className="box">
//             <img src="images/g-9.jpg" alt=""/>
//             <div className="content">
//                 <h3>Egypt civilization</h3>
//                 <p>Come see one of the oldest Ancient civilizations, famous monuments such as the pyramids <br></br>
//                     and the Sphinx, and beautiful beaches that stretch along the coasts of the Mediterranean and the Red Sea...</p>
//                 <a href='#PlaceDetails' className="btn">see more</a>

//             </div>
//         </div>

//     </div>

// </section>


//   )
// }

// export default Gallery






import React, { useState } from "react";
import PlaceDetails from "./PlaceDetails"; // import the Place_Detail component
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Header from "./Header";

const Gallery = () => {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredplaces = places.filter(place => place.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:5000/places')
        setPlaces(data.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <section className="gallery" id="gallery">

        <h1 className="heading">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>y</span>
        </h1>

        <div className="box-container">
          <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          {filteredplaces.map(place => (
            <div className="box" key={place.id}>

              <img src={place.image} alt={place.title} />
              <div className="content">
                <h3> {place.title} </h3>
                <p>{place.description.substring(0, 50) + '...'}</p>
                <Link to={`/PlaceDetails/${place.id}`}>
                  <button className="btn" onClick={() => <PlaceDetails place={place} />}>
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
