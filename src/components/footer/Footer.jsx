import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import "./footer.css";
import bg from "../../images/footer-bg.jpg";
import logo from "../../images/Hmovies.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <SLink to="/"><img src={logo} alt="logo"/></SLink>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <SLink to="/">Home</SLink>
            <SLink to="/">Contact us</SLink>
            <SLink to="/">Term of services</SLink>
            <SLink to="/">About us</SLink>
          </div>
          <div className="footer__content__menu">
            <SLink to="/">Live</SLink>
            <SLink to="/">FAQ</SLink>
            <SLink to="/">Premium</SLink>
            <SLink to="/">Pravacy policy</SLink>
          </div>
          <div className="footer__content__menu">
            <SLink to="/">You must watch</SLink>
            <SLink to="/">Recent release</SLink>
            <SLink to="/">Top IMDB</SLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  opacity: 0.9;
  padding-top: 0.5em;
  &:hover {
    color: #12c6b2;
  }
`

export default Footer;
