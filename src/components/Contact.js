import React from "react";
import contactHeaderImage from "../assets/images/photos/contact-us/contact-us-header.webp";
import "../CSS/Contact.css";
import { Link } from "react-router-dom";
import { handleScrollToTop } from "../utility/scrollUtil";

const Contact = () => {
  return (
    <div className="contact-page-container w-full h-full">
      <div className="contact-header flex justify-center mt-32">
        <img
          src={contactHeaderImage}
          className="contact-header-image object-cover"
          alt="header man pouring milk into paper cup"
        />
      </div>
      <div className="contact-body-container">
        <div className="contact-header-container flex flex-col justify-center items-center mt-5">
          <h1 className="contact-header">SAY HELLO</h1>
          <h2 className="contact-header-message w-1/2 text-center">
            Questions, comments, secret love notes? We'd love to hear from you. Please complete the
            form below, or email us at hello@felixroastingco.com.
          </h2>
        </div>
        <form className="contact-form-container flex flex-col items-center mt-14">
          <div className="input-container name-input-container flex flex-col items-center w-1/2 mt-4">
            <label className="input-label w-3/4">Name</label>
            <input className="name-input form-input h-12 w-3/4" type="text" />
          </div>
          <div className="input-container phone-input-container flex flex-col items-center w-1/2 mt-4">
            <label className="input-label w-3/4">Phone Number</label>
            <input className="phone-input form-input h-12 w-3/4" type="tel" />
          </div>
          <div className="input-container email-input-container flex flex-col items-center w-1/2 mt-4">
            <label className="email-input-label w-3/4 input-label">Email</label>
            <input id="email" className="email-input form-input h-12 w-3/4" type="email" />
          </div>
          <div className="input-container inquiry-select-dropdown flex flex-col items-center w-1/2 mt-4">
            <label className="input-label inquiry-select-label w-3/4">Inquiry</label>
            <select name="inquiry" id="inquiry" className="inquiry-select h-12 w-3/4">
              <option value="general" className="option-general">
                General
              </option>
              <option value="wholesale" className="option-wholesale">
                Wholesale
              </option>
              <option value="press" className="option-press">
                Press
              </option>
              <option value="events" className="option-events">
                Events
              </option>
              <option value="jobs" className="option-jobs">
                Jobs
              </option>
            </select>
          </div>
          <div className="input-container email-input-container flex flex-col items-center w-1/2 mt-4 mb-12">
            <label className="message-input-label w-3/4 input-label">Message</label>
            <textarea
              id="message"
              className="message-input form-input h-12 w-3/4"
              type="text"
              draggable="false"
              cols="40"
              rows="5"
            ></textarea>
          </div>
          <div className="form-submit-button h-12 flex flex-col items-start mb-24">
            <input
              className="w-40 h-12 flex justify-center items-center font-bold"
              type="submit"
              onClick={handleScrollToTop}
              placeholder="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
