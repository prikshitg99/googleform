import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import fundingxlogo from './fundingxlogo.JPG';

const App = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    pgurl: '',
    info: '',
  });

  const { name, email, phone, pgurl, info } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/prikshitgrover/google_sheets/NbAOBfKPpZxfzXBE?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, phone, pgurl, info, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", phone: "", pgurl: "", info: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>

        <span className="fundingxlogo">
          <img className="imglogo" height={176.63} src={fundingxlogo} alt='fundingxlogo' />
        </span>
        <section className="description-tag">
          <h1>Web Development Task</h1>
          <p className="description-info">
            Welcome to FundingX!
            <br />
            <br />
            To become a part of our Web Development Team, please complete the task before the deadline mentioned.
            <br />
            <br />
            No task submissions will be entertained after the deadline
            <br />
            <br />
            TASK -
            <br />
            Replicate this Google form which you are looking at.
            <br />
            <br />
            You may use HTML,CSS or ReactJs. Preference will be given to one using ReactJs and able to send JSON file to a URL.
            <br />
            <br />
            If you like, you may enhance the looks of the page according to you.
            <br />
            <br />
            Host this page on GitHub pages or any hosting service you like and paste link in the form.
            <br />
            <br />
            The tasks given are for understanding how well you are equipped with the skills.
            <br />
            <br />
            Deadline for submission- July 31, 4:00 p.m.
            <br />
            <br />
            <span style={{ color: "red" }}> *Required</span>
          </p>
        </section>

        <section className="requirement-tag">
          <span className="name"> Name</span>
          <span style={{ color: "red" }}> *</span>
          <br /><br />
          <input type="text" name="name" id="name" className="name-input" value={name} onChange={handleChange} placeholder="Your answer" />
        </section>


        <section className="requirement-tag">
          <span className="name"> Email Id</span>
          <span style={{ color: "red" }}> *</span>
          <br /><br />
          <input type="text" name="email" id="email" className="name-input" value={email} onChange={handleChange} placeholder="Your answer" />
        </section>


        <section className="requirement-tag">
          <span className="name">Phone No.</span>
          <span style={{ color: "red" }}> *</span>
          <br /><br />
          <input type="text" name="phone" id="phone" className="name-input" value={phone} onChange={handleChange} placeholder="Your answer" />
        </section>


        <section className="requirement-tag">
          <span className="name"> Page URL</span>
          <span style={{ color: "red" }}> *</span>
          <br /><br />
          <input type="text" name="pgurl" id="pgurl" className="name-input" value={pgurl} onChange={handleChange} placeholder="Your answer" />
        </section>


        <section className="requirement-tag">
          <span className="name"> What is FundingX about?</span>
          <span style={{ color: "red" }}> *</span>
          <br />
          <span className="name-subtag"> Just a one liner as to what you think we do.</span>

          <br /><br />
          <input type="text" name="info" id="info" className="name-input" value={info} onChange={handleChange} placeholder="Your answer" />
        </section>

        <button type="submit" className="btn-submit"> Submit </button>

      </form>

      <footer>
        <span className="footer1"> Never submit passwords through Google Forms.</span>

        <span className="footer2"> This content is neither created nor endorsed by Google.  <u>Report Abuse</u>  - <u>Terms of Service</u>  - <u>Privacy Policy</u></span>
      </footer>


    </>);
}

export default App;