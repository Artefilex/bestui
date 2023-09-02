import React from "react";

function ContactForm({ inputType, cls, clsInput }) {
  return (
    <div>
      <form>
        <div className="row-section">
          <div></div>
          <div></div>
        </div>
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
