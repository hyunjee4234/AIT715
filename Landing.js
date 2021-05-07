import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import first from '../assets/firstgrade.pdf';
import second from '../assets/secondgrade.pdf';
import third from '../assets/thirdgrade.pdf';
import forth from '../assets/forthgrade.pdf';
import fifth from '../assets/fifthgrade.pdf';
import one from '../assets/firstschedule.pdf';
import two from '../assets/secondschedule.pdf';
import three from '../assets/thirdschedule.pdf';
import four from '../assets/forthschedule.pdf';
import five from '../assets/fifthschedule.pdf';

const Landing = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "Private Academy Contact Us Email",
    message: "",
    phone: ""
  });

  const [result, setResult] = useState(null);

  /**
   * On Submit for Contact.
   * @param {event} event 
   */
  const sendEmail = (event) => {
    event.preventDefault();
    setState({ status: "Sending" });  

    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: state,
    }).then((response) => {
      if (response.data.status === "sent") {
        setResult(response.data);
        alert("Message Sent");
        setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed. Try using another domain. Your Email might have been blocked due to security reasons.");
      }
    });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <section className="landing">
      <div className="hero" id="home">
        <div className="hero__container">
          <h1 className="hero__heading">Welcome!</h1>
          <h2 className="hero__heading2">What we do?</h2>
          <h3 className="hero__heading3">
            We provide academic tutoring for Elementary School Students
          </h3>
        </div>
      </div>

      <div className="main" id="viewgradereport">
        <div className="main__container">
          <div className="main__content">
            <h1>*Grade Reports</h1>
            <br />
            <h2>Elementry School Students</h2>
            <ul>
              <li>
              <a href={first} target="_blank" download>
                {" "}
                  Download 1st Grade Report
                </a>
              </li>
              <li>
              <a href={second} target="_blank" download>
                  {" "}
                  Download 2nd Grade Report
                </a>
              </li>
              <li>
              <a href={third} target="_blank" download>
                  {" "}
                  Download 3rd Grade Report
                </a>
              </li>
              <li>
              <a href={forth} target="_blank" download>
                  {" "}
                  Download 4th Grade Report
                </a>
              </li>
              <li>
              <a href={fifth} target="_blank" download>
                  {" "}
                  Download 5th Grade Report
                </a>
              </li>
            </ul>
            <br />
         
          </div>
        </div>
      </div>

      <div className="main" id="viewschedule">
        <div className="main__container">
          <div className="main__content">
            <h1>*Schedules</h1>
            <br />
            <h2>Elementry School</h2>
            <ul>
              <li>
              <a href={one} target="_blank" download>
                  1st Grade Students
                </a>
              </li>
              <li>
              <a href={two} target="_blank" download>
                  2nd Grade Students
                </a>
              </li>
              <li>
              <a href={three} target="_blank" download>
                  3rd Grade Students
                </a>
              </li>
              <li>
              <a href={four} target="_blank" download>
                  4th Grade Students
                </a>
              </li>
              <li>
              <a href={five} target="_blank" download>
                  5th Grade Students
                </a>
              </li>
            </ul>
            <br />
     
          </div>
        </div>
      </div>

      <div className="main" id="tuitionfee">
        <div className="main__container">
          <div className="main__content">
            <h1>*Tuition Fee</h1>
            <br />
            <h2>Elementry School</h2>
            <ul>
              <li>$100/hr for 1st Grade </li>
              <li>$110/hr for 2nd Grade </li>
              <li>$120/hr for 3rd Grade </li>
              <li>$130/hr for 4th Grade</li>
              <li>$150/hr for 5th Grade</li>
            </ul>
            <br />
           
          </div>
        </div>
      </div>

      <div className="main" id="contactus">
        <div className="light__container">
          <div className="light__content">
            <h1 className="light__heading">Contact Us</h1>

            <div>
              <form onSubmit={sendEmail} method="POST">
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Enter your name"
                    onChange={onInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control
                    type="text"
                    name="email"
                    value={state.email}
                    placeholder="Enter your email"
                    onChange={onInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Control
                    type="text"
                    name="phone"
                    value={state.phone}
                    placeholder="Enter your Phone"
                    onChange={onInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="subject">
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={state.message}
                    rows="3"
                    placeholder="Enter your message"
                    onChange={onInputChange}
                  />
                </Form.Group>
                {result && (
                  <p className={`${result.success ? "success" : "error"}`}>
                    {result.message}
                  </p>
                )}
                <Button variant="primary contact-form-btn" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="main-content">
          <div className="heavy__container">
            <div className="heavy__content">
              <div className="left box">
                <h1> About us </h1>
                <div className="content">
                  <p>
                    Private Academy is providing tutoring services for
                    Elementary and Middle School students
                  </p>
                </div>
                <div className="center box">
                  <h2> Address</h2>
                  <div className="content">
                    <div className="place">
                      <span className="fas fa-map-marker-alt"></span>
                      <span className="text">19 Skidmore ct, MD 21015</span>
                    </div>
                    <div className="phone">
                      <span className="fas fa-map-marker-alt"></span>
                      <span className="text">443-123-4567</span>
                    </div>
                    <div className="email">
                      <span className="fas fa-map-marker-alt"></span>
                      <span className="text">abc@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Landing;
