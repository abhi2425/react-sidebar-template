import React from "react";
import "./NavContainer.css";
import NavHeader from "../../Components/NavHeader/NavHeader";
import LinksContainer from "../../Components/LinksContainer/LinksContainer";
import SocialContainer from "../../Components/SocialContainer/SocialContainer";
import { useGlobalContext } from "../../Context/Context";

const NavContainer = () => {
  const { showNav } = useGlobalContext();
  return (
    <aside className={showNav ? "navContainer display" : "navContainer"}>
      <NavHeader />
      <LinksContainer />
      <SocialContainer />
    </aside>
  );
};

export default NavContainer;
