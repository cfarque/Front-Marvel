import "./Header.css";
import Logo from "../assets/Marvel-Comics-Logo.svg";
import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <header className="header">
      <img
        onClick={() => {
          history.push("/");
        }}
        src={Logo}
        alt="logo marvel"
      />

      <div>
        <ul className="header-menu">
          <li
            className="header-characters"
            onClick={() => {
              history.push("/characters");
            }}
          >
            Characters
          </li>
          <li
            className="header-comics"
            onClick={() => {
              history.push("/comics");
            }}
          >
            Comics
          </li>
          <li
            className="header-favorite"
            onClick={() => {
              history.push("/favorites");
            }}
          >
            Favorites
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
