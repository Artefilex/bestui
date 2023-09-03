import {useState} from "react";
import CopyHeader from "../../mainComponent/copy/CopyHeader";
import CssCopy from "../../mainComponent/copy/CssCopy";
import allform from "./allform";
import FormCard from "./FormCard";
import "../../assest/css/item/form.css"
import ContactForm from "./ContactForm";
import InputCard from "./InputCard";
import ContactForm2 from "./ContactForm2";
function Form() {
   const [activeForm , setActiveForm] = useState(null)
    const handleClick = (formId) =>{
     setActiveForm((prevForm) => (prevForm === formId ? null : formId))
  }

  return <div className="Container flex">
  <h1 className="header-tag ">Forms</h1>
  {allform.map((allItem, i) => (
     <div className="flex" key={i} >
      <CopyHeader
        itemType={allItem.header.itemType}
        code={allItem.header.headerCode}
      />
      <div className={(allItem.header.itemContent ==="contact-form"  || allItem.header.itemContent ==="contact-form-2" )? "item-container-full" : "item-container-single"  }>
        {allItem.codeArea.map((singleItem, se) => (
          <div className="item-flex" key={se}>
            <div className="item animation-container flex">
              <div
                className="flex"
                onClick={() => handleClick(`${se}-${allItem.header.headerCode}`)}
             
              >
                {allItem.header.itemContent === "only-input" &&  <InputCard inputType={singleItem.inputType}  clsInput ={singleItem.clsInput} textArea={singleItem.textArea}  cls= {singleItem.cls} /> }
                {allItem.header.itemContent === "standart-form" &&  <FormCard clsInput={singleItem.clsInput} clsForm={singleItem.clsForm} clsBtn={singleItem.clsBtn}/>  }
                {allItem.header.itemContent === "contact-form" && <ContactForm clsForm={singleItem.clsForm}/>}
                {allItem.header.itemContent === "contact-form-2" && <ContactForm2 clsForm={singleItem.clsForm}/>}
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
