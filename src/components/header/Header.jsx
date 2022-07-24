import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/Hmovies.png";
import { FaSearch } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [ showIcon, setShowIcon ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/movies/" + input);
  };
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="menu-icon">
          <GiHamburgerMenu onClick={() => setShowIcon(!showIcon)}/>
        </div>
        <div className={showIcon ? "nav-menu active" : "nav-menu"}>
          <NavLink className="nav-link" to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink className="nav-link" to="/movies/all">
            <h4>Movies</h4>
          </NavLink>
          <NavLink className="nav-link" to="/upcoming">
            <h4>Upcoming</h4>
          </NavLink>
          <NavLink className="nav-link" to="/toprated">
            <h4>Top rated</h4>
          </NavLink>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <FaSearch></FaSearch>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input} placeholder="Search..."
            />
          </div>
        </form>
      </nav>

    </>
  );
};


export default Header;
