import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/Hmovies.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/movies/" + input);
  };
  return (
    <>
      <Nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <NavMenu>
          <SLink to="/">
            <h4>Home</h4>
          </SLink>
          <SLink to="/movies/all">
            <h4>Movies</h4>
          </SLink>
          <SLink to="/upcoming">
            <h4>Upcoming</h4>
          </SLink>
          <SLink to="/toprated">
            <h4>Top rated</h4>
          </SLink>
        </NavMenu>
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
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: transparent;
  z-index: 100;
  img {
    position: absolute;
    width: 8rem;
    margin-left: 5%;
  }

  form {
    position: absolute;
    right: 0;
    margin-top: 1rem;
    margin-right: 5rem;
    div {
      width: 100%;
      position: relative;
    }

    input {
      width: 100%;
      color: #12c6b2;
      outline: none;
      border: none;
      border-radius: 0.2rem;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.2rem 0.8rem;
    }

    svg {
      position: absolute;
      color: #12c6b2;
      top: 50%;
      right: 0;
      transform: translate(-20%, -50%);
    }
  }
`;
const NavMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SLink = styled(NavLink)`
  padding: 1rem;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  padding: 1.3rem 1.5rem;

  background-image: linear-gradient(#12c6b2, #12c6b2);
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: background-size 0.5s;
  h4 {
    font-weight: 600;
    transition: 0.5s;
  }

  &.active {
    color: #12c6b2;
    background-size: 100% 2px;
  }
  &:hover {
    color: #12c6b2;
    background-size: 100% 2px;
  }
`;

export default Header;
