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
    setTimeout(() => {
      axios
        .post(
          "https://elderpalmira.herokuapp.com/api/auth/loginManager",
          loginValues
        )
        .then((res) => {
          if (res.data.ok) {
            setUser(res.data.user);
            setUid(res.data.user.uid);
          } else {
            Swal.fire("error", res.data.msg, "info");
            setIsLoginLoading(false);
          }
        });
    }, 500);
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    setTimeout(() => {
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
    }, 500);
  };

  useEffect(() => {
    let arrow = document.getElementsByClassName("down-arrow")[0];

    arrow.style.display = "none";
    setTimeout(() => {
      arrow.style.display = "inline";
      arrow.style.opacity = 0;
    }, 3000);
    setTimeout(() => {
      arrow.style.opacity = 1;
    }, 3500);
  }, []);

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
          Assistència virtual de proximitat per a qui més estimes
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
        <h1 className="tutorial-title">Com funciona?</h1>
        <a
          className="tutorial-link"
          target="_blank"
          href="https://miquelabella.github.io/elder/"
        >
          <div className="step-container">
            <h1>
              {" "}
              1. Regitra't a l'aplicació que utilitzarà la persona gran i apunta
              el codi de verificació
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
          <h1>
            2. Regitra't a l'aplicació que utilitzarà la persona cuidadora
          </h1>
          <img src={loginImg} />
        </div>
        <a
          className="tutorial-link"
          target="_blank"
          href="http://localhost:3001"
        >
          <div className="step-container">
            <h1>
              3. Escriu les rutines i recordatoris al planificador setmanal
            </h1>
            <img src={planner} />
          </div>
        </a>
        <div className="step-container" style={{ cursor: "default" }}>
          <h1>
            4. L' aplicació ja estarà llesta! Apreta el botó d'escoltar per
            saber què has de fer
          </h1>
          <h4>
            A l'app de la persona cuidadora es mostrarà una llista del moment i
            lloc en que s'ha escoltat un missatge{" "}
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
              placeholder="Adreça electrònica"
            />
            <input
              type="password"
              name="lpassword"
              value={loginValues.lpassword}
              onChange={handleLoginChange}
              placeholder="Clau"
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
            <h1>REGISTRA'T</h1>
            <input
              type="text"
              name="remail"
              value={registerValues.remail}
              onChange={handleRegisterChange}
              placeholder="Adreça electrònica"
            />
            <input
              type="password"
              name="rpassword"
              value={registerValues.rpassword}
              onChange={handleRegisterChange}
              placeholder="Clau"
            />
            <input
              type="text"
              name="verificationCode"
              value={registerValues.verificationCode}
              onChange={handleRegisterChange}
              placeholder="Codi de verificació"
            />
            {!isRegisterLoading ? (
              <button type="submit">Registra't</button>
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
