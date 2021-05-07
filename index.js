/**
 * Server
 */

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'naver',
  auth: {
    user: 'fnqlfl@naver.com',
    pass: 'guswl9949K'
  }
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  /**
   * REST API POST for Contact
   */
  app.post('/contact', (req, res) => {

  try {
    const mailOptions = {
      from: req.body.email,
      to: "fnqlfl@naver.com",
      subject: req.body.subject,
      text: "Contact Number: " + req.body.phone + "\n" + req.body.message
    };
    contactEmail.sendMail(mailOptions, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});
