import React from "react";
import "./App.css";
import NavContainer from "./Containers/NavContainer/NavContainer";
import Modal from "./Components/Modal/Modal";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useGlobalContext } from "./Context/Context";

const app = () => {
  const {
    showNav,
    displayNavBarHandler,
    displayModalHandler,
  } = useGlobalContext();
  return (
    <div className="app">
      <main>
        <button
          className={showNav ? "hideBtn" : "navButton"}
          onClick={displayNavBarHandler}
        >
          <AiOutlineMenuFold />
        </button>

        <button
          className={showNav ? "hideBtn" : "showModal"}
          onClick={displayModalHandler}
        >
          Show Modal
        </button>
      </main>
      <Modal>
        <h1>Modal Content</h1>
      </Modal>
      <NavContainer />
    </div>
  );
};

export default app;
