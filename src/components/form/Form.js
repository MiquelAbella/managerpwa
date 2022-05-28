import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./form.css";
import Swal from "sweetalert2";

export const Form = ({ user, setUid }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("https://elderpalmira.herokuapp.com/api/auth/setSchedule", {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        elderUid: user.elderUid,
        uid: user.uid,
      })
      .then((res) => {
        if (res.data.ok) {
          Swal.fire("S'ha guardat correctament", "", "success");
          setIsLoading(false);
        } else {
          Swal.fire("error", res.data.msg, "info");
          setIsLoading(false);
        }
      });
  };

  const [monday, setMonday] = useState(() =>
    user.schedule
      ? user.schedule.monday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [tuesday, setTuesday] = useState(() =>
    user.schedule
      ? user.schedule.tuesday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [wednesday, setWednesday] = useState(() =>
    user.schedule
      ? user.schedule.wednesday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [thursday, setThursday] = useState(() =>
    user.schedule
      ? user.schedule.thursday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [friday, setFriday] = useState(() =>
    user.schedule
      ? user.schedule.friday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [saturday, setSaturday] = useState(() =>
    user.schedule
      ? user.schedule.saturday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [sunday, setSunday] = useState(() =>
    user.schedule
      ? user.schedule.sunday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );

  const handleMondayChange = (e) => {
    setMonday({ ...monday, [e.target.name]: e.target.value });
  };
  const handleTuesdayChange = (e) => {
    setTuesday({ ...tuesday, [e.target.name]: e.target.value });
  };
  const handleWednesdayChange = (e) => {
    setWednesday({ ...wednesday, [e.target.name]: e.target.value });
  };
  const handleThursdayChange = (e) => {
    setThursday({ ...thursday, [e.target.name]: e.target.value });
  };
  const handleFridayChange = (e) => {
    setFriday({ ...friday, [e.target.name]: e.target.value });
  };
  const handleSaturdayChange = (e) => {
    setSaturday({ ...saturday, [e.target.name]: e.target.value });
  };
  const handleSundayChange = (e) => {
    setSunday({ ...sunday, [e.target.name]: e.target.value });
  };
  return (
    <div className="form">
      <form className="scheduler-form" onSubmit={handleSubmitForm}>
        <nav className="nav">
          <ul>
            <Link to="/form">
              <li>Planificador</li>
            </Link>
            <Link to="/history">
              <li>Històrico</li>
            </Link>
            <Link to="/chart">
              <li>Gràfica</li>
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
        <p>
          * Todos los espacios vacíos se convertirán en "haz lo que te apetezca"
        </p>
        <div className="day">
          <h1>Lunes</h1>
          <p>00:00</p>
          <input
            type="text"
            name="zero"
            value={monday.zero}
            onChange={handleMondayChange}
          />
          <p>01:00</p>
          <input
            type="text"
            name="one"
            value={monday.one}
            onChange={handleMondayChange}
          />
          <p>02:00</p>
          <input
            type="text"
            name="two"
            value={monday.two}
            onChange={handleMondayChange}
          />
          <p>03:00</p>
          <input
            type="text"
            name="three"
            value={monday.three}
            onChange={handleMondayChange}
          />
          <p>04:00</p>
          <input
            type="text"
            name="four"
            value={monday.four}
            onChange={handleMondayChange}
          />
          <p>05:00</p>
          <input
            type="text"
            name="five"
            value={monday.five}
            onChange={handleMondayChange}
          />
          <p>06:00</p>
          <input
            type="text"
            name="six"
            value={monday.six}
            onChange={handleMondayChange}
          />
          <p>07:00</p>
          <input
            type="text"
            name="seven"
            value={monday.seven}
            onChange={handleMondayChange}
          />
          <p>08:00</p>
          <input
            type="text"
            name="eight"
            value={monday.eight}
            onChange={handleMondayChange}
          />
          <p>09:00</p>
          <input
            type="text"
            name="nine"
            value={monday.nine}
            onChange={handleMondayChange}
          />
          <p>10:00</p>
          <input
            type="text"
            name="ten"
            value={monday.ten}
            onChange={handleMondayChange}
          />
          <p>11:00</p>
          <input
            type="text"
            name="eleven"
            value={monday.eleven}
            onChange={handleMondayChange}
          />
          <p>12:00</p>
          <input
            type="text"
            name="twelve"
            value={monday.twelve}
            onChange={handleMondayChange}
          />
          <p>13:00</p>
          <input
            type="text"
            name="thirteen"
            value={monday.thirteen}
            onChange={handleMondayChange}
          />
          <p>14:00</p>
          <input
            type="text"
            name="fourteen"
            value={monday.fourteen}
            onChange={handleMondayChange}
          />
          <p>15:00</p>
          <input
            type="text"
            name="fifteen"
            value={monday.fifteen}
            onChange={handleMondayChange}
          />
          <p>16:00</p>
          <input
            type="text"
            name="sixteen"
            value={monday.sixteen}
            onChange={handleMondayChange}
          />
          <p>17:00</p>
          <input
            type="text"
            name="seventeen"
            value={monday.seventeen}
            onChange={handleMondayChange}
          />
          <p>18:00</p>
          <input
            type="text"
            name="eighteen"
            value={monday.eighteen}
            onChange={handleMondayChange}
          />
          <p>19:00</p>
          <input
            type="text"
            name="nineteen"
            value={monday.nineteen}
            onChange={handleMondayChange}
          />
          <p>20:00</p>
          <input
            type="text"
            name="twenty"
            value={monday.twenty}
            onChange={handleMondayChange}
          />
          <p>21:00</p>
          <input
            type="text"
            name="twentyone"
            value={monday.twentyone}
            onChange={handleMondayChange}
          />
          <p>22:00</p>
          <input
            type="text"
            name="twentytwo"
            value={monday.twentytwo}
            onChange={handleMondayChange}
          />
          <p>23:00</p>
          <input
            type="text"
            name="twentythree"
            value={monday.twentythree}
            onChange={handleMondayChange}
          />
        </div>
        <div className="day">
          <h1>Martes</h1>
          <p>00:00</p>
          <input
            type="text"
            name="zero"
            value={tuesday.zero}
            onChange={handleTuesdayChange}
          />
          <p>01:00</p>
          <input
            type="text"
            name="one"
            value={tuesday.one}
            onChange={handleTuesdayChange}
          />
          <p>02:00</p>
          <input
            type="text"
            name="two"
            value={tuesday.two}
            onChange={handleTuesdayChange}
          />
          <p>03:00</p>
          <input
            type="text"
            name="three"
            value={tuesday.three}
            onChange={handleTuesdayChange}
          />
          <p>04:00</p>
          <input
            type="text"
            name="four"
            value={tuesday.four}
            onChange={handleTuesdayChange}
          />
          <p>05:00</p>
          <input
            type="text"
            name="five"
            value={tuesday.five}
            onChange={handleTuesdayChange}
          />
          <p>06:00</p>
          <input
            type="text"
            name="six"
            value={tuesday.six}
            onChange={handleTuesdayChange}
          />
          <p>07:00</p>
          <input
            type="text"
            name="seven"
            value={tuesday.seven}
            onChange={handleTuesdayChange}
          />
          <p>08:00</p>
          <input
            type="text"
            name="eight"
            value={tuesday.eight}
            onChange={handleTuesdayChange}
          />
          <p>09:00</p>
          <input
            type="text"
            name="nine"
            value={tuesday.nine}
            onChange={handleTuesdayChange}
          />
          <p>10:00</p>
          <input
            type="text"
            name="ten"
            value={tuesday.ten}
            onChange={handleTuesdayChange}
          />
          <p>11:00</p>
          <input
            type="text"
            name="eleven"
            value={tuesday.eleven}
            onChange={handleTuesdayChange}
          />
          <p>12:00</p>
          <input
            type="text"
            name="twelve"
            value={tuesday.twelve}
            onChange={handleTuesdayChange}
          />
          <p>13:00</p>
          <input
            type="text"
            name="thirteen"
            value={tuesday.thirteen}
            onChange={handleTuesdayChange}
          />
          <p>14:00</p>
          <input
            type="text"
            name="fourteen"
            value={tuesday.fourteen}
            onChange={handleTuesdayChange}
          />
          <p>15:00</p>
          <input
            type="text"
            name="fifteen"
            value={tuesday.fifteen}
            onChange={handleTuesdayChange}
          />
          <p>16:00</p>
          <input
            type="text"
            name="sixteen"
            value={tuesday.sixteen}
            onChange={handleTuesdayChange}
          />
          <p>17:00</p>
          <input
            type="text"
            name="seventeen"
            value={tuesday.seventeen}
            onChange={handleTuesdayChange}
          />
          <p>18:00</p>
          <input
            type="text"
            name="eighteen"
            value={tuesday.eighteen}
            onChange={handleTuesdayChange}
          />
          <p>19:00</p>
          <input
            type="text"
            name="nineteen"
            value={tuesday.nineteen}
            onChange={handleTuesdayChange}
          />
          <p>20:00</p>
          <input
            type="text"
            name="twenty"
            value={tuesday.twenty}
            onChange={handleTuesdayChange}
          />
          <p>21:00</p>
          <input
            type="text"
            name="twentyone"
            value={tuesday.twentyone}
            onChange={handleTuesdayChange}
          />
          <p>22:00</p>
          <input
            type="text"
            name="twentytwo"
            value={tuesday.twentytwo}
            onChange={handleTuesdayChange}
          />
          <p>23:00</p>
          <input
            type="text"
            name="twentythree"
            value={tuesday.twentythree}
            onChange={handleTuesdayChange}
          />
        </div>
        <div className="day">
          <h1>Miércoles</h1>
          <p>00:00</p>
          <input
            type="text"
            name="zero"
            value={wednesday.zero}
            onChange={handleWednesdayChange}
          />
          <p>01:00</p>
          <input
            type="text"
            name="one"
            value={wednesday.one}
            onChange={handleWednesdayChange}
          />
          <p>02:00</p>
          <input
            type="text"
            name="two"
            value={wednesday.two}
            onChange={handleWednesdayChange}
          />
          <p>03:00</p>
          <input
            type="text"
            name="three"
            value={wednesday.three}
            onChange={handleWednesdayChange}
          />
          <p>04:00</p>
          <input
            type="text"
            name="four"
            value={wednesday.four}
            onChange={handleWednesdayChange}
          />
          <p>05:00</p>
          <input
            type="text"
            name="five"
            value={wednesday.five}
            onChange={handleWednesdayChange}
          />
          <p>06:00</p>
          <input
            type="text"
            name="six"
            value={wednesday.six}
            onChange={handleWednesdayChange}
          />
          <p>07:00</p>
          <input
            type="text"
            name="seven"
            value={wednesday.seven}
            onChange={handleWednesdayChange}
          />
          <p>08:00</p>
          <input
            type="text"
            name="eight"
            value={wednesday.eight}
            onChange={handleWednesdayChange}
          />
          <p>09:00</p>
          <input
            type="text"
            name="nine"
            value={wednesday.nine}
            onChange={handleWednesdayChange}
          />
          <p>10:00</p>
          <input
            type="text"
            name="ten"
            value={wednesday.ten}
            onChange={handleWednesdayChange}
          />
          <p>11:00</p>
          <input
            type="text"
            name="eleven"
            value={wednesday.eleven}
            onChange={handleWednesdayChange}
          />
          <p>12:00</p>
          <input
            type="text"
            name="twelve"
            value={wednesday.twelve}
            onChange={handleWednesdayChange}
          />
          <p>13:00</p>
          <input
            type="text"
            name="thirteen"
            value={wednesday.thirteen}
            onChange={handleWednesdayChange}
          />
          <p>14:00</p>
          <input
            type="text"
            name="fourteen"
            value={wednesday.fourteen}
            onChange={handleWednesdayChange}
          />
          <p>15:00</p>
          <input
            type="text"
            name="fifteen"
            value={wednesday.fifteen}
            onChange={handleWednesdayChange}
          />
          <p>16:00</p>
          <input
            type="text"
            name="sixteen"
            value={wednesday.sixteen}
            onChange={handleWednesdayChange}
          />
          <p>17:00</p>
          <input
            type="text"
            name="seventeen"
            value={wednesday.seventeen}
            onChange={handleWednesdayChange}
          />
          <p>18:00</p>
          <input
            type="text"
            name="eighteen"
            value={wednesday.eighteen}
            onChange={handleWednesdayChange}
          />
          <p>19:00</p>
          <input
            type="text"
            name="nineteen"
            value={wednesday.nineteen}
            onChange={handleWednesdayChange}
          />
          <p>20:00</p>
          <input
            type="text"
            name="twenty"
            value={wednesday.twenty}
            onChange={handleWednesdayChange}
          />
          <p>21:00</p>
          <input
            type="text"
            name="twentyone"
            value={wednesday.twentyone}
            onChange={handleWednesdayChange}
          />
          <p>22:00</p>
          <input
            type="text"
            name="twentytwo"
            value={wednesday.twentytwo}
            onChange={handleWednesdayChange}
          />
          <p>23:00</p>
          <input
            type="text"
            name="twentythree"
            value={wednesday.twentythree}
            onChange={handleWednesdayChange}
          />
        </div>
        <div className="day">
          <h1>Jueves</h1>
          <p>00:00</p>
          <input
            type="text"
            name="zero"
            value={thursday.zero}
            onChange={handleThursdayChange}
          />
          <p>01:00</p>
          <input
            type="text"
            name="one"
            value={thursday.one}
            onChange={handleThursdayChange}
          />
          <p>02:00</p>
          <input
            type="text"
            name="two"
            value={thursday.two}
            onChange={handleThursdayChange}
          />
          <p>03:00</p>
          <input
            type="text"
            name="three"
            value={thursday.three}
            onChange={handleThursdayChange}
          />
          <p>04:00</p>
          <input
            type="text"
            name="four"
            value={thursday.four}
            onChange={handleThursdayChange}
          />
          <p>05:00</p>
          <input
            type="text"
            name="five"
            value={thursday.five}
            onChange={handleThursdayChange}
          />
          <p>06:00</p>
          <input
            type="text"
            name="six"
            value={thursday.six}
            onChange={handleThursdayChange}
          />
          <p>07:00</p>
          <input
            type="text"
            name="seven"
            value={thursday.seven}
            onChange={handleThursdayChange}
          />
          <p>08:00</p>
          <input
            type="text"
            name="eight"
            value={thursday.eight}
            onChange={handleThursdayChange}
          />
          <p>09:00</p>
          <input
            type="text"
            name="nine"
            value={thursday.nine}
            onChange={handleThursdayChange}
          />
          <p>10:00</p>
          <input
            type="text"
            name="ten"
            value={thursday.ten}
            onChange={handleThursdayChange}
          />
          <p>11:00</p>
          <input
            type="text"
            name="eleven"
            value={thursday.eleven}
            onChange={handleThursdayChange}
          />
          <p>12:00</p>
          <input
            type="text"
            name="twelve"
            value={thursday.twelve}
            onChange={handleThursdayChange}
          />
          <p>13:00</p>
          <input
            type="text"
            name="thirteen"
            value={thursday.thirteen}
            onChange={handleThursdayChange}
          />
          <p>14:00</p>
          <input
            type="text"
            name="fourteen"
            value={thursday.fourteen}
            onChange={handleThursdayChange}
          />
          <p>15:00</p>
          <input
            type="text"
            name="fifteen"
            value={thursday.fifteen}
            onChange={handleThursdayChange}
          />
          <p>16:00</p>
          <input
            type="text"
            name="sixteen"
            value={thursday.sixteen}
            onChange={handleThursdayChange}
          />
          <p>17:00</p>
          <input
            type="text"
            name="seventeen"
            value={thursday.seventeen}
            onChange={handleThursdayChange}
          />
          <p>18:00</p>
          <input
            type="text"
            name="eighteen"
            value={thursday.eighteen}
            onChange={handleThursdayChange}
          />
          <p>19:00</p>
          <input
            type="text"
            name="nineteen"
            value={thursday.nineteen}
            onChange={handleThursdayChange}
          />
          <p>20:00</p>
          <input
            type="text"
            name="twenty"
            value={thursday.twenty}
            onChange={handleThursdayChange}
          />
          <p>21:00</p>
          <input
            type="text"
            name="twentyone"
            value={thursday.twentyone}
            onChange={handleThursdayChange}
          />
          <p>22:00</p>
          <input
            type="text"
            name="twentytwo"
            value={thursday.twentytwo}
            onChange={handleThursdayChange}
          />
          <p>23:00</p>
          <input
            type="text"
            name="twentythree"
            value={thursday.twentythree}
            onChange={handleThursdayChange}
          />
        </div>
        <div className="day">
          <h1>Viernes</h1>
          <p>00:00</p>
          <input
            type="text"
            name="zero"
            value={friday.zero}
            onChange={handleFridayChange}
          />
          <p>01:00</p>
          <input
            type="text"
            name="one"
            value={friday.one}
            onChange={handleFridayChange}
          />
          <p>02:00</p>
          <input
            type="text"
            name="two"
            value={friday.two}
            onChange={handleFridayChange}
          />
          <p>03:00</p>
          <input
            type="text"
            name="three"
            value={friday.three}
            onChange={handleFridayChange}
          />
          <p>04:00</p>
          <input
            type="text"
            name="four"
            value={friday.four}
            onChange={handleFridayChange}
          />
          <p>05:00</p>
          <input
            type="text"
            name="five"
            value={friday.five}
            onChange={handleFridayChange}
          />
          <p>06:00</p>
          <input
            type="text"
            name="six"
            value={friday.six}
            onChange={handleFridayChange}
          />
          <p>07:00</p>
          <input
            type="text"
            name="seven"
            value={friday.seven}
            onChange={handleFridayChange}
          />
          <p>08:00</p>
          <input
            type="text"
            name="eight"
            value={friday.eight}
            onChange={handleFridayChange}
          />
          <p>09:00</p>
          <input
            type="text"
            name="nine"
            value={friday.nine}
            onChange={handleFridayChange}
          />
          <p>10:00</p>
          <input
            type="text"
            name="ten"
            value={friday.ten}
            onChange={handleFridayChange}
          />
          <p>11:00</p>
          <input
            type="text"
            name="eleven"
            value={friday.eleven}
            onChange={handleFridayChange}
          />
          <p>12:00</p>
          <input
            type="text"
            name="twelve"
            value={friday.twelve}
            onChange={handleFridayChange}
          />
          <p>13:00</p>
          <input
            type="text"
            name="thirteen"
            value={friday.thirteen}
            onChange={handleFridayChange}
          />
          <p>14:00</p>
          <input
            type="text"
            name="fourteen"
            value={friday.fourteen}
            onChange={handleFridayChange}
          />
          <p>15:00</p>
          <input
            type="text"
            name="fifteen"
            value={friday.fifteen}
            onChange={handleFridayChange}
          />
          <p>16:00</p>
          <input
            type="text"
            name="sixteen"
            value={friday.sixteen}
            onChange={handleFridayChange}
          />
          <p>17:00</p>
          <input
            type="text"
            name="seventeen"
            value={friday.seventeen}
            onChange={handleFridayChange}
          />
          <p>18:00</p>
          <input
            type="text"
            name="eighteen"
            value={friday.eighteen}
            onChange={handleFridayChange}
          />
          <p>19:00</p>
          <input
            type="text"
            name="nineteen"
            value={friday.nineteen}
            onChange={handleFridayChange}
          />
          <p>20:00</p>
          <input
            type="text"
            name="twenty"
            value={friday.twenty}
            onChange={handleFridayChange}
          />
          <p>21:00</p>
          <input
            type="text"
            name="twentyone"
            value={friday.twentyone}
            onChange={handleFridayChange}
          />
          <p>22:00</p>
          <input
            type="text"
            name="twentytwo"
            value={friday.twentytwo}
            onChange={handleFridayChange}
          />
          <p>23:00</p>
          <input
            type="text"
            name="twentythree"
            value={friday.twentythree}
            onChange={handleFridayChange}
          />
        </div>
        <div className="day">
          <h1>Sábado</h1>
          <p>00:00</p>
          <input
            type="text"
            name="zero"
            value={saturday.zero}
            onChange={handleSaturdayChange}
          />
          <p>01:00</p>
          <input
            type="text"
            name="one"
            value={saturday.one}
            onChange={handleSaturdayChange}
          />
          <p>02:00</p>
          <input
            type="text"
            name="two"
            value={saturday.two}
            onChange={handleSaturdayChange}
          />
          <p>03:00</p>
          <input
            type="text"
            name="three"
            value={saturday.three}
            onChange={handleSaturdayChange}
          />
          <p>04:00</p>
          <input
            type="text"
            name="four"
            value={saturday.four}
            onChange={handleSaturdayChange}
          />
          <p>05:00</p>
          <input
            type="text"
            name="five"
            value={saturday.five}
            onChange={handleSaturdayChange}
          />
          <p>06:00</p>
          <input
            type="text"
            name="six"
            value={saturday.six}
            onChange={handleSaturdayChange}
          />
          <p>07:00</p>
          <input
            type="text"
            name="seven"
            value={saturday.seven}
            onChange={handleSaturdayChange}
          />
          <p>08:00</p>
          <input
            type="text"
            name="eight"
            value={saturday.eight}
            onChange={handleSaturdayChange}
          />
          <p>09:00</p>
          <input
            type="text"
            name="nine"
            value={saturday.nine}
            onChange={handleSaturdayChange}
          />
          <p>10:00</p>
          <input
            type="text"
            name="ten"
            value={saturday.ten}
            onChange={handleSaturdayChange}
          />
          <p>11:00</p>
          <input
            type="text"
            name="eleven"
            value={saturday.eleven}
            onChange={handleSaturdayChange}
          />
          <p>12:00</p>
          <input
            type="text"
            name="twelve"
            value={saturday.twelve}
            onChange={handleSaturdayChange}
          />
          <p>13:00</p>
          <input
            type="text"
            name="thirteen"
            value={saturday.thirteen}
            onChange={handleSaturdayChange}
          />
          <p>14:00</p>
          <input
            type="text"
            name="fourteen"
            value={saturday.fourteen}
            onChange={handleSaturdayChange}
          />
          <p>15:00</p>
          <input
            type="text"
            name="fifteen"
            value={saturday.fifteen}
            onChange={handleSaturdayChange}
          />
          <p>16:00</p>
          <input
            type="text"
            name="sixteen"
            value={saturday.sixteen}
            onChange={handleSaturdayChange}
          />
          <p>17:00</p>
          <input
            type="text"
            name="seventeen"
            value={saturday.seventeen}
            onChange={handleSaturdayChange}
          />
          <p>18:00</p>
          <input
            type="text"
            name="eighteen"
            value={saturday.eighteen}
            onChange={handleSaturdayChange}
          />
          <p>19:00</p>
          <input
            type="text"
            name="nineteen"
            value={saturday.nineteen}
            onChange={handleSaturdayChange}
          />
          <p>20:00</p>
          <input
            type="text"
            name="twenty"
            value={saturday.twenty}
            onChange={handleSaturdayChange}
          />
          <p>21:00</p>
          <input
            type="text"
            name="twentyone"
            value={saturday.twentyone}
            onChange={handleSaturdayChange}
          />
          <p>22:00</p>
          <input
            type="text"
            name="twentytwo"
            value={saturday.twentytwo}
            onChange={handleSaturdayChange}
          />
          <p>23:00</p>
          <input
            type="text"
            name="twentythree"
            value={saturday.twentythree}
            onChange={handleSaturdayChange}
          />
        </div>
        <div className="day">
          <h1>Domingo</h1>
          <p>00:00</p>
          <input
            type="text"
            name="zero"
            value={sunday.zero}
            onChange={handleSundayChange}
          />
          <p>01:00</p>
          <input
            type="text"
            name="one"
            value={sunday.one}
            onChange={handleSundayChange}
          />
          <p>02:00</p>
          <input
            type="text"
            name="two"
            value={sunday.two}
            onChange={handleSundayChange}
          />
          <p>03:00</p>
          <input
            type="text"
            name="three"
            value={sunday.three}
            onChange={handleSundayChange}
          />
          <p>04:00</p>
          <input
            type="text"
            name="four"
            value={sunday.four}
            onChange={handleSundayChange}
          />
          <p>05:00</p>
          <input
            type="text"
            name="five"
            value={sunday.five}
            onChange={handleSundayChange}
          />
          <p>06:00</p>
          <input
            type="text"
            name="six"
            value={sunday.six}
            onChange={handleSundayChange}
          />
          <p>07:00</p>
          <input
            type="text"
            name="seven"
            value={sunday.seven}
            onChange={handleSundayChange}
          />
          <p>08:00</p>
          <input
            type="text"
            name="eight"
            value={sunday.eight}
            onChange={handleSundayChange}
          />
          <p>09:00</p>
          <input
            type="text"
            name="nine"
            value={sunday.nine}
            onChange={handleSundayChange}
          />
          <p>10:00</p>
          <input
            type="text"
            name="ten"
            value={sunday.ten}
            onChange={handleSundayChange}
          />
          <p>11:00</p>
          <input
            type="text"
            name="eleven"
            value={sunday.eleven}
            onChange={handleSundayChange}
          />
          <p>12:00</p>
          <input
            type="text"
            name="twelve"
            value={sunday.twelve}
            onChange={handleSundayChange}
          />
          <p>13:00</p>
          <input
            type="text"
            name="thirteen"
            value={sunday.thirteen}
            onChange={handleSundayChange}
          />
          <p>14:00</p>
          <input
            type="text"
            name="fourteen"
            value={sunday.fourteen}
            onChange={handleSundayChange}
          />
          <p>15:00</p>
          <input
            type="text"
            name="fifteen"
            value={sunday.fifteen}
            onChange={handleSundayChange}
          />
          <p>16:00</p>
          <input
            type="text"
            name="sixteen"
            value={sunday.sixteen}
            onChange={handleSundayChange}
          />
          <p>17:00</p>
          <input
            type="text"
            name="seventeen"
            value={sunday.seventeen}
            onChange={handleSundayChange}
          />
          <p>18:00</p>
          <input
            type="text"
            name="eighteen"
            value={sunday.eighteen}
            onChange={handleSundayChange}
          />
          <p>19:00</p>
          <input
            type="text"
            name="nineteen"
            value={sunday.nineteen}
            onChange={handleSundayChange}
          />
          <p>20:00</p>
          <input
            type="text"
            name="twenty"
            value={sunday.twenty}
            onChange={handleSundayChange}
          />
          <p>21:00</p>
          <input
            type="text"
            name="twentyone"
            value={sunday.twentyone}
            onChange={handleSundayChange}
          />
          <p>22:00</p>
          <input
            type="text"
            name="twentytwo"
            value={sunday.twentytwo}
            onChange={handleSundayChange}
          />
          <p>23:00</p>
          <input
            type="text"
            name="twentythree"
            value={sunday.twentythree}
            onChange={handleSundayChange}
          />
        </div>

        <button className="form-submit-btn" disabled={isLoading} type="submit">
          {isLoading ? ". . ." : "Guarda"}
        </button>
      </form>
    </div>
  );
};
