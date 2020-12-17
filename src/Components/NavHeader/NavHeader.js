import React from "react";
import { GrClose } from "react-icons/gr";
import { useGlobalContext } from "../../Context/Context";
const NavHeader = () => {
  const { hideNavBarHandler } = useGlobalContext();
  return (
    <header className="navHeader">
      <h2>
        Coding <span>Addict</span>
      </h2>
      <button className="closeNav" onClick={hideNavBarHandler}>
        <GrClose />
      </button>
    </header>
  );
};

export default NavHeader;
