import React, { useState, useContext } from "react";

export const AppContext = React.createContext();

export const FeatureProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const displayNavBarHandler = () => {
    setShowNav(true);
  };
  const displayModalHandler = () => {
    setShowModal(true);
  };
  const hideNavBarHandler = () => {
    setShowNav(false);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        showNav,
        showModal,
        displayModalHandler,
        displayNavBarHandler,
        hideModalHandler,
        hideNavBarHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
