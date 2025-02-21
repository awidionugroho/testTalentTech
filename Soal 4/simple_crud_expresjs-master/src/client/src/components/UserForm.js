import React, { useState, useEffect } from "react";
import $ from "jquery";
import { CForm, CFormInput, CFormLabel, CButton } from "@coreui/react";

const UserForm = ({ selectedUser, onFormSubmit, onReset, onSuccess }) => {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    email: "",
    age: "",
    bod: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name,
        email: selectedUser.email,
        age: selectedUser.age,
        bod: selectedUser.bod,
        id: selectedUser.id,
      });
    } else {
      resetForm();
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // please submit from url backend
    var url = "";
    var method = "";
    if (selectedUser) {
      url = `/api/users/${formData.id}`;
      method = "put";
    } else {
      url = `/api/users`;
      method = "post";
    }
    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        response.json();
        handleReset();
        onSuccess();
      })
      .catch((error) => console.error(error));
  };

  const resetForm = () => {
    setFormData({
      id: 0,
      name: "",
      email: "",
      age: "",
      bod: "",
    });
  };

  const handleReset = () => {
    resetForm();
    onReset();
  };

  return (
    <div className="container mt-5">
      <h2>{selectedUser ? "Edit User" : "Create User"}</h2>
      <CForm onSubmit={handleSubmit}>
        <div className="mb-3">
          <CFormLabel htmlFor="name">Name</CFormLabel>
          <CFormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="email">Email</CFormLabel>
          <CFormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="age">Age</CFormLabel>
          <CFormInput
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="18"
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="bod">Date of Birth</CFormLabel>
          <CFormInput
            type="date"
            id="bod"
            name="bod"
            value={formData.bod}
            onChange={handleChange}
            required
          />
        </div>
        <CButton type="submit" color="primary">
          {selectedUser ? "Update" : "Submit"}
        </CButton>
        <CButton type="button" color="secondary" onClick={() => handleReset()}>
          Reset
        </CButton>
      </CForm>
    </div>
  );
};

export default UserForm;
