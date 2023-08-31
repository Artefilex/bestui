import React, { useState } from "react";

import { BsCaretRight, BsCaretDown } from "react-icons/bs";
function NavbarItem({  children, btnName ,content }) {
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
              <div>
                {children}
              </div>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavbarItem;
