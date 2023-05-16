import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import "../Profile.css";
import Header from "./Header";
const Profile = ({ userId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/Users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [userId]);

  return (
    <section className="Profile">
      <Header />
      <div className="card">
        <img
          src="/images/Profile.jpg"
          alt="Profile"
          style={{ width: "100%" }}
        />
        <div className="title">
          <label htmlFor="name">
            Full Name
            <input type="text" value={user.name} id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" value={user.email} id="email" />
          </label>
          <label htmlFor="pass">
            Password
            <input type="text" value={user.pass} id="pass" />
          </label>
        </div>
        <button>Go Back</button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
    const loginState = state.Login || {}; // handle undefined or null state.Login
    return {
      userId: loginState.LoginED,
    };
  };

export default connect(mapStateToProps)(Profile);