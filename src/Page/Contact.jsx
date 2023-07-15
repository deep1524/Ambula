import React, { useState } from "react";
import { addContactForm } from "../api";

const Contact = () => {
  const [newNameValue, setnewNameValue] = useState("");
  const [newEmailValue, setnewEmailValue] = useState("");
  const [newPhoneValue, setnewPhoneValue] = useState("");
  const handleSubmitNewTask = async (e) => {
    e.preventDefault();
    if (
      newNameValue.length > 0 &&
      newEmailValue.length > 0 &&
      newPhoneValue.length > 0
    ) {
      await addContactForm({
        id: Date.now().toString(36),
        name: newNameValue,
        email: newEmailValue,
        phone: newPhoneValue,
      });
    } else {
      alert("Please enter all the information");
    }
    alert("Your Data Successfully Added");
    setnewNameValue("");
    setnewEmailValue("");
    setnewPhoneValue("");

    window.location.reload(false);
  };

  return (
    <div className="max-w-lg mx-auto">
      <form
        method="dialog"
        className="modal-box"
        onSubmit={handleSubmitNewTask}
      >
        <h3 className="font-bold text-center text-2xl">Contact Form</h3>
        <div className="model-action mt-5">
          <input
            value={newNameValue}
            onChange={(e) => setnewNameValue(e.target.value)}
            type="text"
            placeholder="Enter your Name here"
            className="input input-bordered w-full mb-5 "
          />
          <input
            value={newEmailValue}
            onChange={(e) => setnewEmailValue(e.target.value)}
            type="email"
            placeholder="Enter your Email here"
            className="input input-bordered w-full mb-5  "
          />
          <input
            value={newPhoneValue}
            onChange={(e) => setnewPhoneValue(e.target.value)}
            type="text"
            placeholder="Enter your Phone here"
            className="input input-bordered w-full mb-5  "
          />
        </div>
        <button type="submit" className="btn w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
