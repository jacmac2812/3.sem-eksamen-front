import facade from "./apiFacade";
import React, { useState } from "react";
import "./style.css";
import "bootstrap"

const CreateContact = () => {

  const initialValue = {
    name: "",
    email: "",
    company: "",
    jobtitle: "",
    phone: ""
  };

  const [newContact, setNewContact] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    facade.fetchAddUser(newContact);
    setNewContact(initialValue);
  };


  return (
    <form onSubmit={handleSubmit}>

      <input
        name="name"
        value={newContact.name}
        onChange={handleChange}
        placeholder="Add name"
      />
      <br />
      <input
        name="email"
        value={newContact.email}
        onChange={handleChange}
        placeholder="Add email"
      />
      <br />
      <input
        name="company"
        value={newContact.company}
        onChange={handleChange}
        placeholder="Add company"
      />
      <br />
      <input
        name="jobtitle"
        value={newContact.jobtitle}
        onChange={handleChange}
        placeholder="Add jobtitle"
      />
      <br />
      <input
        name="phone"
        value={newContact.phone}
        onChange={handleChange}
        placeholder="Add phonenumb"
      />
      <br />

      <button className="button buttonCategory buttonSort" type="submit" value="Submit">Add</button>

    </form>

  );
};

export default CreateContact;



