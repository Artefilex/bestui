import {useState} from "react";
import CopyHeader from "../../mainComponent/copy/CopyHeader";
import CssCopy from "../../mainComponent/copy/CssCopy";
import allform from "./allform";
import Singleform from "./Singleform";
function Form() {
   const [activeForm , setActiveForm] = useState(null)
    const handleClick = (formId) =>{
     setActiveForm((prevForm) => (prevForm === formId ? null : formId))
  }

  return <div className="Button-container flex">
  <h1 className="header-tag ">Forms</h1>
  {allform.map((allItem, i) => (
    <div className="Button-container flex"  key={i}>
      <CopyHeader
        itemType={allItem.header.itemType}
        code={allItem.header.headerCode}
      />
      <div className="item-container">
        {allItem.codeArea.map((singleItem, se) => (
          <div className="item-flex" key={se}>
            <div className="item animation-container flex">
              <div
                className={singleItem.cls}
                onClick={() => handleClick(`${se}-${allItem.header.headerCode}`)}
             
              >
                <Singleform />
              </div>
            </div>
            <div className="flex codebase">
              <CssCopy 
              code={singleItem.css} 
              isActive={ activeForm === `${se}-${allItem.header.headerCode}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>;
}

export default Form;
