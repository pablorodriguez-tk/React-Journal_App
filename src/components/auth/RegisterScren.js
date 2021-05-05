import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator from "validator";

const RegisterScren = () => {
  const initialForm = {
    name: "Hernando",
    email: "nando@gmail.com",
    password: "123456",
    password2: "123456",
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { name, email, password, password2 } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("Name is required");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Email is not valid");
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log("Password should be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Formulario Correcto");
    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola Mundo</div>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScren;
