import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.screenY > 50);
    };

    window.addEventListener("scroll", handleScroll)
  });

  return <></>;
};

export default Navbar;
