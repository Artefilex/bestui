import React, { useState } from "react";
import "./copy.css";
import Copy from "./Copy";
function Buttons() {
    const [activeButtonId, setActiveButtonId] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButtonId((prevId) => (prevId === buttonId ? null : buttonId));
    };

  const btn1 = {
    css: "button{\n color : wheat;\n background: black; \n} ",
    react: `
        <button classname = "ejs" > click </button>
          `,
  };
  return (
    <div className="Button-container">
    <div className="item-container ">
        <div className="item">
            <button className={"ejs"} onClick={() => handleButtonClick(1)}>click </button>
            <Copy cssCode={btn1} cssClass={"ejs"} isActive={activeButtonId === 1} />
        </div>
        <div className="item">
            <button className={"ejs"} onClick={() => handleButtonClick(2)}>click </button>
            <Copy cssCode={btn1} cssClass={"ejs"} isActive={activeButtonId === 2} />
        </div>
    </div>
</div>
  );
}

export default Buttons;
