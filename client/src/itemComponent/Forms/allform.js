const allform = [
  {
    header: {
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
         }
         
         .standart-form  button:hover{
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          color : rgb(0, 0, 0);
          background: rgb(255, 255, 255);
          border: 1px solid black;
          font-weight: 900;
         }
      `,
        cls: "Form flex",
        clsInput: "standart-input",
        clsBtn: "standart-form-btn",
        clsForm: "standart-form",
      },
    ],
  },
   {
    header: {
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
         }
         
         .standart-form  button:hover{
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          color : rgb(0, 0, 0);
          background: rgb(255, 255, 255);
          border: 1px solid black;
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
    ],
  },
];

export default allform;
