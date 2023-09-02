const allform = [
  {
    header: {
      itemContent: "only-input",
      itemType: "Input",
      headerCode: `
      <div class="input-data">
          <input type="text" name="text" required />
          <label htmlFor="text">Name</label>
       </div>
          `,
    },
    codeArea: [

      {
        css: `.input-data{
          width: 100%;
          height: 40px;
          margin: 0 20px;
          position: relative;
        }
        
        .input-data input{
          display: block;
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          font-size: 17px;
          border-bottom: 2px solid rgba(0,0,0, 0.12);
        }
        
        .input-data input:focus ~ label, 
        .input-data input:valid ~ label{
          transform: translateY(-20px);
          font-size: 14px;
          color: rgb(82, 81, 81);
        }
        
        
        .input-data label{
          position: absolute;
          pointer-events: none;
          bottom: 10px;
          font-size: 16px;
          transition: all 0.3s ease;
        }
      `,
        inputType: "email",
        cls: "input-data",
        clsInput: "Email",
        textArea: "Email"
      },
      {
        css: `..input-data-border{
          width: 100%;
          height: 40px;
          margin: 0 20px;
          position: relative;
        }
        
        .input-data-border input{
          display: block;
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          font-size: 17px;
          border-bottom: 2px solid rgba(0,0,0, 0.12);
          transition: 0.3s ease-in-out;
          border: 2px solid rgb(137, 137, 137);
          padding: 0.5rem 1rem;
          border-radius: 3rem;
        }
        
        .input-data-border input:focus ~ .label, 
        .input-data-border input:valid ~ .label{
          transform: translateY(-20px);
          font-size: 14px;
         
          color: rgb(82, 81, 81);
          background: white;
          left: 20px;
        }
        
        .input-data-border .label{
          position: absolute;
          pointer-events: none;
          bottom: 10px;
          left: 2rem;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        }
      `,
        inputType: "text",
        cls: "input-data-border",
        clsInput: "User Name",
        textArea: "User Name"
      },
      {
        css: `
        .something{
          width: 5rem;
          height: 1rem;
         border: 1px solid rgb(207, 207, 207);
         display: flex;
         align-items: center;
         padding:  1rem ;
         position: relative;
         background: rgb(207, 207, 207);
         transition: 0.3s ease-in-out;
        border-radius: 10rem;
        }
        .something input[type="checkbox"]:not(:checked){
        z-index: 12;
        opacity: 0.01;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        }
        .something input[type="checkbox"]:not(:checked) + label{
          content: "";
          position: absolute;
          top: 8px;
          left: 15px;
          cursor: pointer;
          width: 1rem;
          height: 1rem;
          background: rgb(90, 89, 89);
          border-radius: 5rem;
          transition: 0.3s ease-in-out;
          
        }
        
        .something input[type="checkbox"]:checked{
          position: absolute;
          right: 1rem;
          z-index: 12;
          opacity: 0.01;
          cursor: pointer;
          transition: 0.3s ease-in-out;
        }
        
        
        .something input[type="checkbox"]:checked + label{
          content: "";
          position: absolute;
          top: 8px;
          right: 16px;
          cursor: pointer;
          width: 1rem;
          height: 1rem;
          background: rgb(253, 253, 253);
          border-radius: 5rem;
          transition: 0.3s ease-in-out;
        }
      
      `,
        inputType: "checkbox",
        cls: "something",
        clsInput: "x",
        textArea: "",
      
      },
      
    ],
  },
  {
    header: {
      itemContent: "standart-form",
      itemType: " Standart Form",
      headerCode: `import React, { useState } from "react";

          function FormCard({clsInput , clsForm ,clsBtn}) {
              const [form ,setForm] = useState({
                  username : "",
                  email:"",
                  password : ""
              })
              const handleChange = (e) =>{
               const   {name , value} =  e.target
                 setForm((prevForm) =>({
                  ...prevForm,
                  [name] : value
                 }))
              }
             const handleSubmit = (e) =>{
              e.preventDefault()
              console.log(form.username , form.password)
              // some code 
              setForm({
                  username : "",
                  email:"",
                  password : ""
              }) } 
              return 
              <form action="" className="standar-form" onSubmit={handleSubmit}>
              <h3> Login </h3>
              <div className="form-control">
                <label htmlFor="username"> Username </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="paswsord">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">
                <span>Submit</span>
        </button>
     </form>
           
          }
          
          export default FormCard;
          `,
    },
    codeArea: [
      {
        css: `.standart-form {
          width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center ;
          justify-content: center;
          gap: 2rem;
          background: rgba(29, 29, 29, 0.39);
          border: 1px solid rgb(167, 167, 167);
          padding: 1rem 0.5rem;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .standart-form-dark h3{
        filter: invert(1);
    }
      .standart-form .form-control{
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
      }
      
      .standart-form .form-control input{
          width: 100%;
          padding: 0.5rem 1rem;
          font-size: 13px;
          border-radius: 20px ;
          border: none;
          outline: none;
      }
      
      .standart-form .form-control label{
       color : rgb(255, 255, 255)
      }
      
      .standart-form  button{
          color : rgb(255, 255, 255);
          background: rgb(0, 0, 0);
          width: 90%;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          transition: 0.5s ease-in-out;
         }
         
         .standart-form  button:hover{
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          color : rgb(0, 0, 0);
          background: rgb(255, 255, 255);
          font-weight: 900;
         }
      `,
        cls: "Form flex",
        clsInput: "standart-input",
        clsBtn: "standart-form-btn",
        clsForm: "standart-form",
      },
      {
        css: `   .standart-form-dark {
          width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center ;
          justify-content: center;
          gap: 2rem;
          background: rgba(29, 29, 29, 0.968);
          border: 1px solid rgb(167, 167, 167);
          padding: 1rem 0.5rem;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .standart-form-dark h3{
        filter: invert(1);
    }
      .standart-form-dark .form-control{
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
      }
      
      .standart-form-dark .form-control input{
          width: 100%;
          padding: 0.5rem 1rem;
          font-size: 13px;
          border-radius: 20px ;
          border: none;
          outline: none;
          background: rgb(0, 0, 0);
          color: #ffffff;
      }
      
      .standart-form-dark .form-control label{
       color : rgb(255, 255, 255)
      }
      .standart-form-dark button{
          color : rgb(0, 0, 0);
          background: rgb(255, 255, 255);
          width: 90%;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          transition: 0.5s ease-in-out;
         }
         
      .standart-form-dark button:hover{
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          color : rgb(252, 252, 252);
          background: rgb(0, 0, 0);
          border: 1px solid black;
          font-weight: 900;
         }
      `,
        cls: "Form flex",
        clsInput: "standart-input",
        clsBtn: "standart-form-btn",
        clsForm: "standart-form-dark",
      },
      {
        css: `.standart-form-dark-bottom h3{
          filter: invert(1);
      }
      .standart-form-dark-bottom{
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background: rgba(29, 29, 29, 0.968);
        border: 1px solid rgb(167, 167, 167);
        padding: 1rem 0.5rem;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: relative;
      }
      .standart-form-dark-bottom .form-control {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        position: relative;
      }
      
      .standart-form-dark-bottom .form-control input {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 13px;
        border: none;
        border-bottom: 1px solid White;
        outline: none;
        background: transparent;
        color: #ffffff;
      }
      .standart-form-dark-bottom .form-control input:hover{
          border-bottom: 2px solid rgb(255,255,255);
          transition: 0.5s ease-in-out;
          transform: scale(1.05);
      }
      .standart-form-dark-bottom .form-control label {
        color: rgb(255, 255, 255);
      }
      .standart-form-dark-bottom button {
        color: rgb(255, 255, 255);
        background: transparent;
        width: 90%;
        padding: 0.5rem 1rem;
        border-bottom: 2px solid white;
        transition: 0.3s ease-in-out;
      }
      
      .standart-form-dark-bottom button:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        color: rgb(252, 252, 252);
        background: rgb(0, 0, 0);
        border: 1px solid black;
        font-weight: 900;
      }
      `,
        cls: "Form flex",
        clsInput: "standart-input",
        clsBtn: "standart-form-btn",
        clsForm: "standart-form-dark-bottom",
      },
      {
        css: `.standart-form-bottom{
          width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.968);
          border: 1px solid rgb(214, 214, 214);
          padding: 1rem 0.5rem;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          position: relative;
        }
        .standart-form-bottom .form-control {
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          position: relative;
        }
        
        .standart-form-bottom .form-control input {
          width: 100%;
          padding: 0.5rem 1rem;
          font-size: 13px;
          border: none;
          border-bottom: 1px solid rgb(0, 0, 0);
          outline: none;
          background: transparent;
          color: #000000;
        }
        .standart-form-bottom .form-control input:hover{
            border-bottom: 2px solid rgb(255, 255, 255);
            transition: 0.5s ease-in-out;
            transform: scale(1.05);
        }
        .standart-form-bottom .form-control label {
          color: rgb(0, 0, 0);
        }
        .standart-form-bottom button {
          color: rgb(0, 0, 0);
          background: transparent;
          width: 90%;
          padding: 0.5rem 1rem;
          border-bottom: 2px solid rgb(0, 0, 0);
          transition: 0.3s ease-in-out;
        }
        
        .standart-form-bottom button:hover {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          color: rgb(252, 252, 252);
          background: rgb(0, 0, 0);
          border: 1px solid black;
          font-weight: 900;
        }
      `,
        cls: "Form flex",
        clsInput: "standart-input",
        clsBtn: "standart-form-btn",
        clsForm: "standart-form-bottom",
      },
    ],
  },
 
];

export default allform;
