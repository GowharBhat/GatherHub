import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "CSS/app.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userType: "admin",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("User Registered:", formData);
  //   if (formData.userType === "participant") {
  //     navigate("/eventDashBoard", { state: { user: formData } });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);

    // Determine if adminFlow should be true or false
    const adminFlow = formData.userType === "admin"; // Example condition for admin flow

    navigate("/eventDashBoard", { state: { user: formData, adminFlow } });
  };

  return (
    <div className="LoginPage">
      <h1>Login To Event</h1>
      <h3>User Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            User Type:
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="admin">Admin</option>
              <option value="participant">Participant</option>
            </select>
          </label>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;