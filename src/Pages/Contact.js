import React, { useState } from "react";
import Header from "./Header";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, subject, message };
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (<>
    <Header />
    <section class="contact" id="contact">

      <h1 class="heading">
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </h1>

      <div class="row">

        <div class="image">
          <img src="images/contact-img.svg" alt="" />
        </div>

        <form onSubmit={handleSubmit} action="http://localhost:3001/send-email" method="POST">
          <div className="inputBox">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="inputBox">
            <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10} />
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <input type="submit" className="btn" value="Send Message" />
        </form>

      </div>

    </section>
  </>
  )
}

export default Contact
