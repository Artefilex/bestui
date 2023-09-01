import React, { useState } from "react";
import "../../assest/css/item/buttons.css";
import CssCopy from "../../mainComponent/copy/CssCopy";
import CopyHeader from "../../mainComponent/copy/CopyHeader";
import all from "./all";

function Buttons() {
  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButtonId((prevId) => (prevId === buttonId ? null : buttonId));
  };

  return (
    <div className="Button-container flex">
      {all.map((allItem, i) => (
        <div className="Button-container flex"  key={i}>
          <CopyHeader
            itemType={allItem.header.itemType}
            code={allItem.header.headerCode}
          />
          <div className="item-container">
            {allItem.codeArea.map((singleItem, se) => (
              <div className="flex" key={se}>
                <div className="item animation-container flex">
                  <button
                    className={singleItem.cls}
                    onClick={() => handleButtonClick(`${se}-${allItem.header.headerCode}`)}
                    dangerouslySetInnerHTML={{ __html: singleItem.btncode }}
                  ></button>
                </div>
                <div className="flex codebase">
                  <CssCopy code={singleItem.css} isActive={activeButtonId === `${se}-${allItem.header.headerCode}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Buttons;
