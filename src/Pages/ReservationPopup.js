import React from 'react';
import '../popup.css'
function ReservationPopup(props) {
    
  return (
    <div className="reservation-popup">
      <h2>Reservation Confirmation</h2>
      <p>Thank you for your reservation! 
        We will contact you shortly to confirm your booking.</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default ReservationPopup;