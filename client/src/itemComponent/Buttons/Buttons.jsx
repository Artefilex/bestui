import React, { useState } from "react";
import buttonData from "./bacisbtndata";
import animationbtn from "./animationbtndata";
import "../../assest/css/item/buttons.css";
import CssCopy from "../../mainComponent/copy/CssCopy";
import CopyHeader from "../../mainComponent/copy/CopyHeader";
import animationbtn2 from "./animbtn";

function Buttons() {
  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleButtonClick = (buttonId ,dataType) => {
    console.log(dataType);
    setActiveButtonId((prevId) => (prevId === buttonId  ? null : buttonId));
  };

  return (
    <div className="Button-container flex">
      <CopyHeader
        itemType={"Styling for Classic Type Buttons"}
        code={`<button className={"className"} > Click Me </button>`}
      />
      <div className="item-container ">
      {buttonData.map((item, index) => (
          <div className="flex"  key={index}>
            <div className="item flex">
              <button
                className={item.cls}
                onClick={() => handleButtonClick(`${index}-s`)}
              >
               Click
              </button>
            </div>
            <div className="flex codebase">
              <CssCopy code={item} isActive={activeButtonId === `${index}-s`} />
            </div>
          </div>
        ))}
      </div>

      <CopyHeader
        itemType={"Animation Button"}
        code={` <button class="slide_from_x slide ">SLIDE FROM LEFT</button>`}
      />
      <div className="item-container">
        {animationbtn.map((item, index) => (
          <div className="flex"  key={index}>
            <div className="item animation-container flex">
              <button
                className={item.cls} 
                onClick={() => handleButtonClick(`${index}-a`) }
               
              > Get Start </button>
            </div>
            <div className="flex codebase">
              <CssCopy code={item} isActive={activeButtonId ===`${index}-a`} />
            </div>
          </div>
        ))}
      </div>

      <CopyHeader
        itemType={"Animation Button"}
        code={` <button class="btn">
        <i>H</i><i>o</i><i>v</i><i>e</i><i>r</i>
        <i>t</i><i>h</i><i>e</i>
        <i>B</i><i>u</i><i>t</i><i>t</i><i>o</i><i>n</i>
      </button>`}
      />
      <div className="item-container">
        {animationbtn2.map((item, index) => (
          <div className="flex"  key={index}>
            <div className="item animation-container flex">
              <a
                className={item.cls} 
                onClick={() => handleButtonClick(`${index}-an`)  }   dangerouslySetInnerHTML={{ __html: item.code }}></a>
            </div>
            <div className="flex codebase">
              <CssCopy code={item} isActive={activeButtonId ===`${index}-an`}/>
            </div>
          </div>
        ))}
      </div>




    </div>
  );
}

export default Buttons;
