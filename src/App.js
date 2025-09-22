import React, { useState } from "react";

function App() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation function
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation (simple regex)
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Registered Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
      // Reset form after success
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Registration Form</h1>

      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        
        {/* Name */}
        <div style={{ margin: "10px 0" }}>
          <label>Name: </label><br />
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "6px", width: "250px" }}
          />
          {errors.name && <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div style={{ margin: "10px 0" }}>
          <label>Email: </label><br />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "6px", width: "250px" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={{ margin: "10px 0" }}>
          <label>Password: </label><br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "6px", width: "250px" }}
          />
          {errors.password && <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ padding: "8px 16px", fontSize: "16px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
