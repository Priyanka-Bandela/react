import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    let formErr = validate(formValues);

    if (Object.keys(formErr).length) {
      setFormErrors(formErr);
    } else {
      setFormErrors(formErr);
      navigate("/home");

      console.log("formValues", formValues);
    }

    // console.log(formValues);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (values.password.length != 8) {
      errors.password = "password must be atleast 8 digits";
    }
    return errors;
  };

  return (
    <div className="container">
      <h2>LOGIN</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          name="email"
          className="form-control"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <p style={{ color: "red" }}>{formErrors.email}</p>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          className="form-control"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <p style={{ color: "red" }}>{formErrors.password}</p>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
