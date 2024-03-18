import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !subject || !msg) {
        toast.error("Please provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        subject,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setSubject("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact" id="contacts">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="/images/contact.jpg"
                    alt="ocontact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h3 className="text-center clink">
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/minhaz-ashraf-117975267/"
                        target="_blank"
                      >
                        <BsLinkedin  size={30} className="ms-2" />
                      </a>
                      <a href="https://twitter.com/Minhaz_A1" target="_blank">
                        {" "}
                        <AiFillTwitterCircle
                         
                          size={35}
                          className="ms-2"
                        />
                      </a>
                    </h3>
                  </div>

                  <div className="row px-3 mb-2">
                    <h6 className="or text-center">OR</h6>
                   
                  </div>
                  <div className="row px-3">
                    <div className="form__group field mb-3">
                      <input
                        type="input"
                        name="name"
                        className="form__field"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="row px-3">
                    <div className="form__group field mb-3 ">
                      <input
                        type="email"
                        className="form__field"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="row px-3">
                    <div className="form__group field mb-3">
                      <input
                        type="text"
                        name="subject"
                        className="form__field"
                        placeholder="Same"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Subject
                      </label>
                    </div>
                  </div>

                  <div className="row px-3">
                    <div className="form__group field">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="form__field"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                      <label htmlFor="name" className="form__label">
                        Message
                      </label>
                    </div>
                  </div>
                  <button className="btn-17 mt-3"  onClick={handleSubmit}>
                    <span className="text-container">
                      <span className="text">Submit</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
