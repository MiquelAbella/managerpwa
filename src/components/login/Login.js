import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-scroll";
import Swal from "sweetalert2";

import loginImg from "./loginImg.png";
import elder from "./elder.png";
import planner from "./planner.png";
import appImg from "./appImg.png";

export const Login = ({ setUid, setUser }) => {
  const [loginValues, setLoginValues] = useState({
    lemail: "",
    lpassword: "",
  });
  const [registerValues, setRegisterValues] = useState({
    remail: "",
    rpassword: "",
    verificationCode: "",
  });
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const [startLogging, setStartLogging] = useState(false);

  const handleLoginChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };
  const handleRegisterChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoginLoading(true);

    axios
      .post(
        "https://elderpalmira.herokuapp.com/api/auth/loginManager",
        loginValues
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) {
          setUser(res.data.user);
          setUid(res.data.user.uid);
        } else {
          Swal.fire("error", res.data.msg, "info");
          setIsLoginLoading(false);
        }
      });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsRegisterLoading(true);

    axios
      .post(
        "https://elderpalmira.herokuapp.com/api/auth/createManagerUser",
        registerValues
      )
      .then((res) => {
        if (res.data.ok) {
          setUser(res.data.manager);
          setUid(res.data.manager.uid);
        } else {
          Swal.fire("error", res.data.msg, "info");
          setIsRegisterLoading(false);
        }
      });
  };

  return (
    <div className="login-screen">
      <div className="login">
        <img
          onClick={() => {
            setStartLogging(true);
          }}
          className="login-icon"
          src={loginImg}
        />
        <h1 className="app-name animate__animated animate__fadeInDown">
          Palmira
        </h1>
        <h2 className="app-slogan animate__animated animate__fadeInDown">
          Assistencia virtual de proximidad para quien mas quieres
        </h2>
        <Link
          activeClass="active"
          to="tutorial"
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
        >
          <h1 className="down-arrow">&darr;</h1>
        </Link>
        <div className="custom-shape-divider-bottom-1651951222">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="tutorial" id="tutorial">
        <h1 className="tutorial-title">Como funciona?</h1>
        <a
          className="tutorial-link"
          target="_blank"
          href="https://miquelabella.github.io/elderpwa/"
        >
          <div className="step-container">
            <h1>
              {" "}
              1.Registrate en la aplicación que usará la persona mayor y apunta
              el código de verificación
            </h1>
            <img src={elder} />
          </div>
        </a>
        <div
          className="step-container"
          onClick={() => {
            setStartLogging(true);
          }}
        >
          <h1>2. Registrate en la aplicación de la persona cuidadora</h1>
          <img src={loginImg} />
        </div>
        <a
          className="tutorial-link"
          target="_blank"
          href="http://localhost:3001"
        >
          <div className="step-container">
            <h1>3. Escribe las rutinas y recordatorios semanales</h1>
            <img src={planner} />
          </div>
        </a>
        <div className="step-container" style={{ cursor: "default" }}>
          <h1>
            4. ¡La aplicación estará lista! Aprieta el botón de recordatori i
            escucha el mensaje
          </h1>
          <h4>
            En la aplicación de la persona cuidadora se mostrará un historial y
            una gráfica de las veces que se ha escuchado el mensaje
          </h4>
          <img src={appImg} />
        </div>
      </div>
      {startLogging ? (
        <div className="forms-container animate__animated animate__fadeIn">
          <h1
            onClick={() => {
              setStartLogging(false);
            }}
            className="close-btn"
          >
            x
          </h1>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h1>ENTRA</h1>
            <input
              type="text"
              name="lemail"
              value={loginValues.lemail}
              onChange={handleLoginChange}
              placeholder="Email del cuidador"
            />
            <input
              type="password"
              name="lpassword"
              value={loginValues.lpassword}
              onChange={handleLoginChange}
              placeholder="Contraseña"
            />
            {!isLoginLoading ? (
              <button type="submit">Entra</button>
            ) : (
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </form>

          <form className="register-form" onSubmit={handleRegisterSubmit}>
            <h1>REGISTRATE</h1>
            <input
              type="text"
              name="remail"
              value={registerValues.remail}
              onChange={handleRegisterChange}
              placeholder="Email del cuidador"
            />
            <input
              type="password"
              name="rpassword"
              value={registerValues.rpassword}
              onChange={handleRegisterChange}
              placeholder="Contraseña"
            />
            <input
              type="text"
              name="verificationCode"
              value={registerValues.verificationCode}
              onChange={handleRegisterChange}
              placeholder="Codigo de verificación"
            />
            {!isRegisterLoading ? (
              <button type="submit">Registrate</button>
            ) : (
              <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </form>
        </div>
      ) : null}
    </div>
  );
};
