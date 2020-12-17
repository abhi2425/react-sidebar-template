import React, { useState } from "react";
import { social } from "../../data";
import SocialLink from "./SocialLink/SocialLink";
const SocialContainer = () => {
  const [socialList, setSocialList] = useState(social);
  const socialLink = socialList.map((socialLink) => {
    return <SocialLink key={socialLink.id} socialLink={socialLink} />;
  });
  return <ul className="socialContainer">{socialLink}</ul>;
};

export default SocialContainer;
