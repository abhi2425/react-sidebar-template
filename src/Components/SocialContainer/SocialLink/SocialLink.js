import React from "react";
import "./SocialLink.css";

const SocialLink = ({ socialLink }) => (
  <li className="socialLink">
    <a className="socialLink--route" href={socialLink.url}>
      <i className="socialIcons">{socialLink.icon}</i>
    </a>
  </li>
);

export default SocialLink;
