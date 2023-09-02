import {useState} from "react";
import CopyHeader from "../../mainComponent/copy/CopyHeader";
import CssCopy from "../../mainComponent/copy/CssCopy";
import allform from "./allform";
import FormCard from "./FormCard";
import "../../assest/css/item/form.css"
function Form() {
   const [activeForm , setActiveForm] = useState(null)
    const handleClick = (formId) =>{
     setActiveForm((prevForm) => (prevForm === formId ? null : formId))
  }

  return <div className="Container flex">
  <h1 className="header-tag ">Forms</h1>
  {allform.map((allItem, i) => (
     <>
      <CopyHeader
        itemType={allItem.header.itemType}
        code={allItem.header.headerCode}
      />
      <div className="item-container-single">
        {allItem.codeArea.map((singleItem, se) => (
          <div className="item-flex" key={se}>
            <div className="item animation-container flex">
              <div
                className={singleItem.cls}
                onClick={() => handleClick(`${se}-${allItem.header.headerCode}`)}
             
              >
                <FormCard clsInput={singleItem.clsInput} clsForm={singleItem.clsForm} clsBtn={singleItem.clsBtn}/>

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
     
     </>
  
  ))}
</div>;
}

export default Form;
