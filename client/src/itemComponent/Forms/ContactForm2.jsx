import { useState } from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
function ContactForm2({ clsForm }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emails: "",
    telNumber: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // api request

    console.log(form);
    setForm({
      firstName: "",
      lastName: "",
      emails: "",
      telNumber: "",
      message: "",
    });
  };
  return (
    <div className="Contact-form flex">
      <div className="contact-info flex">
        <div className="contact-item">
          <BsFillTelephoneForwardFill />
           {/* <span>05061210625</span> */}
        </div>
        <div className="contact-item">
          <BiLogoGmail /> 
           {/* <span>baris.tncdmr@gmail.com</span> */}
        </div>
        <div className="contact-item">
          <BiLogoLinkedin  /> 
          {/* <span> www.linkedin.com/in/baris-tuncdemir</span> */}
        </div>
        <div className="contact-item">
          <AiOutlineGithub /> 
          {/* <span> https://github.com/Artefilex</span> */}
        </div>
      </div>
      <form className={`${clsForm} form-flex`} onSubmit={handleSubmit}>
        <div className="row form-flex">
          <div className="column form-flex">
            <div className="input-data">
              <input
                type="text"
                value={form.firstName}
                name="firstName"
                onChange={handleChange}
                required
              />
              <div className="label"> First Name </div>
            </div>
            <div className="input-data">
              <input
                type="text"
                value={form.lastName}
                name="lastName"
                onChange={handleChange}
                required
              />
              <div className="label"> Last Name </div>
            </div>
          </div>
          <div className="column form-flex">
            <div className="input-data">
              <input
                type="text"
                value={form.emails}
                name="emails"
                onChange={handleChange}
                required
              />
              <div className="label"> Email </div>
            </div>
            <div className="input-data">
              <input
                type="tel"
                value={form.telNumber}
                name="telNumber"
                onChange={handleChange}
                required
              />
              <div className="label"> Telephone </div>
            </div>
          </div>
        </div>
        <div className="column form-flex ">
          <div className="input-data">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <div className="label"> Message</div>
          </div>
          <div className="input-data">
            <button type="submit" id="submit-btn">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm2;
