import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import instagram from "./assets/instagram.avif";

function Header({ onRecensioniFiltered }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onRecensioniFiltered(value);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link>
            <img className="instagram" src={instagram} />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
        <li>
          <input
            className="barra-ricerca"
            type="text"
            placeholder="Cerca un libro..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
