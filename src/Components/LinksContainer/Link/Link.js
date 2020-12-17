import React from "react";
import "./Link.css";

const Link = ({ link }) => (
  <li className="list">
    <div className="linkBox">
      <i className="link--icon">{link.icon}</i>
      <a className="link--url" href={link.url}>
        {link.text}
      </a>
    </div>
  </li>
);

export default Link;
