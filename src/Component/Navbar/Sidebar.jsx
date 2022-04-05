import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Sidebar.css";
import Logo from "../../Asset/Logo.svg";
function Sidebar() {
  return (
    <div>
      <aside className="main-sidebar sidebar-secondary-primary  elevation-1">
        <div className="title">
          <img src={Logo} alt="" width="100" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Resume</Link>
            </li>
            <li>
              <Link to="/">Project</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="contact">
            <p>Contact</p>
          </div>
          <div className="contact-menu">
            <Link to="/">
              <FaWhatsapp />
            </Link>
            <Link to="/">
              <AiFillGithub />
            </Link>
            <Link to="/">
              <AiOutlineLinkedin />
            </Link>
          </div>
          <div className="contact-menu">
            <Link to="/">
              <AiFillTwitterCircle />
            </Link>
            <Link to="/">
              <AiFillFacebook />
            </Link>
            <Link to="/">
              <AiOutlineInstagram />
            </Link>
          </div>
        </div>
        <p className="footer">copyright @2022 by Azim</p>
      </aside>
    </div>
  );
}

export default Sidebar;
