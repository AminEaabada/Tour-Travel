import React, { useState } from 'react'
import ReservationPopup from './ReservationPopup';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

// import { useDispatch } from 'react-redux';
// import { add_reservation } from '../Redux/Actions';
function Reservation() {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // const [N_Reserv,setN_Reserv]=useState('')
  const [Place_name, setPlace_name] = useState('')
  const [N_adults, setN_adults] = useState('')
  const [N_children, setN_children] = useState('')
  const [Date_arivals, setDate_arivals] = useState('')
  const [Date_leaving, setdDte_leaving] = useState('')


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:5000/Reservations`, { Place_name, N_adults, N_children, Date_arivals, Date_leaving })
      toast.success('Reservation was successfull!')
    }
    catch (err) {
      console.log(err);
    }

    setFormSubmitted(true);
  };

  const handleReserveNowClick = () => {
    if (formSubmitted) {
      setShowPopup(true);
    }
  };


  return (
    <>
      <Header />
      <section class="book" id="book">

        <h1 class="heading">
          <span>r</span>
          <span>e</span>
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>e</span>
          <span class="space"></span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
        </h1>

        <div class="row">

          <div class="image">
            <img src="images/book-img.svg" alt="" />
          </div>

          <form onSubmit={handleFormSubmit}>
            {/* <div class="inputBox">
                <h3>number Of Reservation</h3>
                <input type="number" placeholder="number Of Reservation" min={100} maxLength={5} onChange={(e)=>setN_Reserv(e.target.value)}  required  value={N_Reserv} />
            </div> */}
            <div class="inputBox">
              <h3>where to</h3>
              <input type="text" placeholder="place name" onChange={(e) => setPlace_name(e.target.value)} required value={Place_name} />
            </div>
            <div class="inputBox">
              <h3>how many </h3>
              <input type="number" placeholder="number of guests Adults" min="1" onChange={(e) => setN_adults(e.target.value)} required value={N_adults} />
            </div>
            <div class="inputBox">
              <h3>how many </h3>
              <input type="number" placeholder="number of children" min="0" onChange={(e) => setN_children(e.target.value)} required value={N_children} />
            </div>
            <div class="inputBox">
              <h3>arrivals</h3>
              <input type="date" onChange={(e) => setDate_arivals(e.target.value)} required value={Date_arivals} />
            </div>
            <div class="inputBox">
              <h3>leaving</h3>
              <input type="date" onChange={(e) => setdDte_leaving(e.target.value)} required value={Date_leaving} />
            </div>
            {/* <Link to='/Register'> */}
            <input type="submit" class="btn" onClick={handleReserveNowClick} value="RESERVE now" />
            {/* </Link> */}
          </form>
          {showPopup && <ReservationPopup onClose={() => setShowPopup(false)} />}
          {showPopup && <ReservationPopup onClose={() => setShowPopup(false)} />}
        </div>
        <ToastContainer style={{ fontSize: '15px', width: '550px' }}
          position="top-right"
          autoClose={2000}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  )
}

export default Reservation
