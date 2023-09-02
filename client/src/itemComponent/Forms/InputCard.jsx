import React from "react";

function InputCard({ inputType, cls, clsInput, textArea }) {
  return (
    <div className={cls}>
      <input 
      type={inputType} 
      name={clsInput} 
      className={clsInput}
       required />
      <div className="label">{textArea}</div>
    </div>
  );
}

export default InputCard;
