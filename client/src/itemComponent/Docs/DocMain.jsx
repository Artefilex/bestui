import React from "react";
import "../../assest/css/item/docmain.css"
import Buttons from "../Buttons/Buttons";
import Form from "../Forms/Form";
import Singleform from "../Forms/Singleform";
function DocMain() {
  return (
    <div className="Doc container">
      <Buttons/>
      <Form/>
      <Singleform/>
    </div>
  );
}

export default DocMain;
