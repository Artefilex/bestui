import React, { useCallback, useEffect, useState } from "react";
import "../../assest/css/sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../assest/img/logo.png";
import NavbarItem from "./NavbarItem";
import DocNav from "../../itemComponent/Docs/DocNav";
import { AiOutlineMenu } from "react-icons/ai";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 500);
  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    const handleResize = () => {
      const newMobile = window.innerWidth < 500;
      setMobile(newMobile);
      setShow(false);
      if (!newMobile) {
        setShow(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="Sidebar flex">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {mobile && (
        <button className="menu-button" onClick={handleClick}>
          <AiOutlineMenu />
        </button>
      )}
      {(show || !mobile) && (
          <ul className="flex sidebar-nav">
            <NavbarItem to="/doc" btnName="Docs">
              <DocNav />
            </NavbarItem>
            <NavbarItem to="/example" btnName="Example">
            <DocNav />
            </NavbarItem>
          </ul> 
      )}
    </div>
  );
}

export default Sidebar;
