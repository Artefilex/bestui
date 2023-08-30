import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCaretRight, BsCaretDown } from "react-icons/bs";
function NavbarItem({ to, children, btnName }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <li>
      <button onClick={handleClick} className=" btn">
        <span>{btnName} </span>
        {show ? <BsCaretDown /> : <BsCaretRight />}{" "}
      </button>
      {show && (
        <div className="flex">
          <ul className="flex" >
            <li className="nav navbar-down">
              <Link to={to}>{children}</Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavbarItem;
