import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';




// import Rating from 'react-rating-stars-component';

function Destinations(props) {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }
    const loginFormRef = useRef(null);


    const [booked, setBooked] = useState(false);

    const BookSuccess = () => {
        setBooked(true);
        toast.success(" Booking successful !  We Thank You For Booking  ");
    };

    const handleFormCloseClick = () => {
        loginFormRef.current.classList.remove("active");
    }

    const mrb = {
        marginTop: "22px"
    }

    const [Destinations, setDestinations] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('  http://localhost:5000/Destinations')
                setDestinations(data.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (<>
        <Header />
        <section className="packages" id="packages">

            <h1 className="heading">
                <span>d</span>
                <span>e</span>
                <span>s</span>
                <span>t</span>
                <span>i</span>
                <span>n</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
                <span>s</span>
            </h1>

            <div className="box-container">
                {
                    Destinations.map(
                        (destination , index) => (
                            <div className="box" key={index}>
                                <img src={destination.image} alt={destination.name + '' + 'Image'} />
                                <div className="content">
                                    <h3> <i className="fas fa-map-marker-alt"></i> {destination.name}</h3>
                                    <p>{destination.description.substring(0, 150) + '...'} </p>
                                    <div className="stars" style={mrb}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    {/* <Rating count={5} size={24}  activeColor="#ffd700" isHalf={true}  value={2.5} onChange={ratingChanged} /> */}
                                    <div className="price"> {destination.newPrice} <span>{destination.oldPrice}</span> </div>
                                    <a className="btn " onClick={BookSuccess} >book now</a>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            {booked && toast.success(" Booking successful !  We Thank You For Booking  ")}
        </section>
    </>
    )
}

export default Destinations
