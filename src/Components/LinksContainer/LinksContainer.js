import React, { useState } from "react";
import { links } from "../../data";
import Link from "./Link/Link";

const LinksContainer = () => {
  const [list, setList] = useState(links);
  const link = list.map((link) => {
    return <Link link={link} key={link.id} />;
  });
  return <ul className="navigation">{link}</ul>;
};

export default LinksContainer;
