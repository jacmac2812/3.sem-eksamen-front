import facade from "./apiFacade";
import React, { useState } from "react";
import "./style.css";
import "bootstrap"

const EditUser = () => {
  const initialValue = {
    id: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
    name: "",
  };

  const [editUser, setEditUser] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    facade.fetchEditUser(editUser);
    setEditUser(initialValue);
  };


  return (
    <>
    {/* <h3>You are editing: {facade.getUser()}</h3> */}
    <form onSubmit={handleSubmit}>
    <input
        name="id"
        value={editUser.id}
        onChange={handleChange}
        placeholder="Identifier ID"
      />
      <br />
      <input
        name="name"
        value={editUser.name}
        onChange={handleChange}
        placeholder="name"
      />
      <br />
      <input
        name="email"
        value={editUser.email}
        onChange={handleChange}
        placeholder="Edit email"
      />
      <br />
      <input
        name="company"
        value={editUser.company}
        onChange={handleChange}
        placeholder="company"
      />
      <br />
      <input
        name="jobtitle"
        value={editUser.jobtitle}
        onChange={handleChange}
        placeholder="jobtitle"
      />
      <br />
      <input
        name="phone"
        value={editUser.phone}
        onChange={handleChange}
        placeholder="Edit phonenumber"
      />
      <br />

      <button className="button buttonCategory buttonSort" type="submit" value="Submit">Edit</button>

    </form>
    </>

  );
};

export default EditUser;