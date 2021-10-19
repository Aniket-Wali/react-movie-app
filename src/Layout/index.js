import { useState, useEffect } from "react";
import moment from "moment";

// Navbar
const Navbar = ({ appName = "Default" }) => {
  const [currentDateAndTime, setCurrentDataAndTime] = useState("");

  const getDateAndTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const mins = date.getMinutes();
    const seconds = date.getSeconds();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const dateString = `${day}/${month}/${year} ${hour}:${mins}:${seconds}`;
    const newDateString = moment().format("DD/MM/YY hh:mm:ss");
    setCurrentDataAndTime(newDateString);
  };

  useEffect(() => {
    setInterval(() => getDateAndTime(), 1000);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {appName}
        </a>
        <p className="text-white">{currentDateAndTime}</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Browse
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="p-2 bg-dark text-white footer fixed-bottom">
      <p>Copyright @ ABC.com</p>
    </footer>
  );
};

export { Navbar, Footer };
