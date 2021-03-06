import React, { useMemo } from "react";
import "./history.css";
import { Link } from "react-router-dom";

export const History = ({ user, setUid }) => {
  const commonPlace = useMemo(() => {
    if (user.history) {
      let positions = [];
      for (let i = 0; i < user.history.length; i++) {
        positions.push([user.history[i][0][0], user.history[i][0][1]]);
      }

      let mf = 1;
      let m = 0;
      let item;

      for (let i = 0; i < positions.length; i++) {
        for (let j = i; j < positions.length; j++) {
          if (
            positions[i][0].toFixed(4) === positions[j][0].toFixed(4) &&
            positions[i][1].toFixed(4) === positions[j][1].toFixed(4)
          )
            m++;
          if (mf < m) {
            mf = m;
            item = positions[i];
          }
        }

        m = 0;
      }

      return item;
    } else {
      return null;
    }
  }, [user.history]);

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const distances = useMemo(() => {
    if (user.history.length === 1) {
      return "0";
    }
    let distances = [];
    let mostCommonPlace = () => {
      if (user.history.length === 1) {
        return user.history[0];
      }
      let positions = [];
      for (let i = 0; i < user.history.length; i++) {
        positions.push([user.history[i][0][0], user.history[i][0][1]]);
      }

      let mf = 1;
      let m = 0;
      let item;

      for (let i = 0; i < positions.length; i++) {
        for (let j = i; j < positions.length; j++) {
          if (
            positions[i][0].toFixed(4) === positions[j][0].toFixed(4) &&
            positions[i][1].toFixed(4) === positions[j][1].toFixed(4)
          )
            m++;
          if (mf < m) {
            mf = m;
            item = positions[i];
          }
        }

        m = 0;
      }

      return item;
    };
    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
      var R = 6371;
      var dLat = deg2rad(lat2 - lat1);
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d.toFixed(2);
    };
    mostCommonPlace();
    getDistanceFromLatLonInKm();
    let positions = [];
    for (let i = 0; i < user.history.length; i++) {
      positions.push([user.history[i][0][0], user.history[i][0][1]]);
    }

    for (let i = 0; i < user.history.length; i++) {
      distances.push(
        getDistanceFromLatLonInKm(
          user.history[i][0][0],
          user.history[i][0][1],
          commonPlace[0],
          commonPlace[1]
        )
      );
    }
    return distances;
  }, [user.history, commonPlace]);

  const handleToggle = (e) => {
    let dayValue = e.target.getAttribute("dayvalue");
    let dayContainer = document.getElementsByClassName(dayValue);
    let toggleBtn = e.target;

    for (let i = 0; i < dayContainer.length; i++) {
      if (dayContainer[i].classList.contains("hidden")) {
        document.getElementsByClassName(dayValue)[i].classList.remove("hidden");
      } else {
        document.getElementsByClassName(dayValue)[i].classList.add("hidden");
      }
    }
    toggleBtn.innerText === "+"
      ? (toggleBtn.innerText = "???")
      : (toggleBtn.innerText = "+");
  };

  return (
    <div className="history">
      <nav className="nav">
        <ul>
          <Link to="/form">
            <li>Planificador</li>
          </Link>
          <Link to="/history">
            <li>Hist??rico</li>
          </Link>
          <Link to="/chart">
            <li>Gr??fica</li>
          </Link>
          <li
            onClick={() => {
              setUid("");
            }}
          >
            Sal
          </li>
        </ul>
      </nav>
      <p style={{ width: "80%", textAlign: "left", margin: "2vh" }}>
        {" "}
        *El sitio habitual es el sitio desde donde mas veces se ha escuchado un mensaje.
      </p>
      <p className="first-date">
        {user.history.length ? (
          <>
            <strong>{user.history[0][2]}</strong>

            <button
              className="toggle-btn"
              onClick={handleToggle}
              dayvalue={user.history[0][2]}
            >
              &#x2b;
            </button>
          </>
        ) : (
          <p>Nada que mostrar</p>
        )}
      </p>
      {user.history
        ? user.history.map((moment, idx) => {
            return (
              <>
                {user.history[idx - 1] &&
                  user.history[idx][2] !== user.history[idx - 1][2] && (
                    <div className="day-info" key={idx}>
                      <p className="date">
                        <strong>{moment[2]}</strong>
                      </p>
                      <button
                        className="toggle-btn"
                        onClick={handleToggle}
                        dayvalue={moment[2]}
                      >
                        &#x2b;
                      </button>
                    </div>
                  )}
                <div className={`moment ${moment[2]} hidden`}>
                  {user.history[idx - 1] &&
                  user.history[idx][2] !== user.history[idx - 1][2] ? (
                    <>
                      <p>text: {moment[1]}</p>
                      <p>
                        {commonPlace &&
                        commonPlace[0].toFixed(3) === moment[0][0].toFixed(3) &&
                        commonPlace[1].toFixed(3) ===
                          moment[0][1].toFixed(3) ? (
                          <a
                            className="google-link"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.google.com/search?q=${moment[0][0]}+%2C+${moment[0][1]}`}
                          >
                            Lloc habitual
                          </a>
                        ) : (
                          <a
                            className="google-link"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.google.com/search?q=${moment[0][0]}+%2C+${moment[0][1]}`}
                          >
                            Lloc: {moment[0][0]} , {moment[0][1]} -{" "}
                            <span>
                              &nbsp;
                              {distances[idx]}Km del sitio habitual
                            </span>
                          </a>
                        )}
                      </p>
                    </>
                  ) : user.history.length === 1 ? (
                    <>
                      <p>Mensaje: {moment[1]}</p>
                      <p>
                        <a
                          className="google-link"
                          target="_blank"
                          rel="noreferrer"
                          href={`https://www.google.com/search?q=${moment[0][0]}+%2C+${moment[0][1]}`}
                        >
                          Sitio habitual
                        </a>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>Mensaje: {moment[1]}</p>
                      <p>
                        {commonPlace &&
                        commonPlace[0].toFixed(3) === moment[0][0].toFixed(3) &&
                        commonPlace[1].toFixed(3) ===
                          moment[0][1].toFixed(3) ? (
                          <a
                            className="google-link"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.google.com/search?q=${moment[0][0]}+%2C+${moment[0][1]}`}
                          >
                            Sitio habitual
                          </a>
                        ) : (
                          <a
                            className="google-link"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.google.com/search?q=${moment[0][0]}+%2C+${moment[0][1]}`}
                          >
                            Lloc: {moment[0][0]} , {moment[0][1]} -{" "}
                            <span>
                              &nbsp;
                              {distances[idx]}Km del sitio habitual
                            </span>
                          </a>
                        )}
                      </p>
                    </>
                  )}
                </div>
              </>
            );
          })
        : null}
    </div>
  );
};
