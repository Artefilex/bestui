import React, { useState } from "react";

import "../../assest/css/item/buttons.css";
import CssCopy from "../../mainComponent/copy/CssCopy";
import CopyHeader from "../../mainComponent/copy/CopyHeader";
function Buttons() {
  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButtonId((prevId) => (prevId === buttonId ? null : buttonId));
  };

  const btn1 = {
    css: "button{\n color : wheat;\n background: black; \n} ",
  };
  return (
    <div className="Button-container flex">
      <CopyHeader
        itemType={"Styling for Classic Type Buttons"}
        code={`<button className={"className"} > Click Me </button>`}
      />
      <div className="item-container flex ">
        <div className="flex">
          <div className="item flex">
            <button className={"ejs"} onClick={() => handleButtonClick(1)}>
              click{" "}
            </button>
          </div>
          <div className="flex codebase">
            <CssCopy code={btn1} isActive={activeButtonId === 1} />
          </div>
        </div>
        <div className="flex">
          <div className="item flex">
            <button className={"ejs"} onClick={() => handleButtonClick(1)}>
              click{" "}
            </button>
          </div>
          <div className="flex codebase">
            <CssCopy code={btn1} isActive={activeButtonId === 1} />
          </div>
        </div>
        <div className="flex">
          <div className="item flex">
            <button className={"ejs"} onClick={() => handleButtonClick(1)}>
              click{" "}
            </button>
          </div>
          <div className="flex codebase">
            <CssCopy code={btn1} isActive={activeButtonId === 1} />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Buttons;
