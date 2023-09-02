import React, { useState } from "react";

function Singleform() {
    const [form ,setForm] = useState({
        username: "",
        password: ""
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
        password : ""
    })

   }
  return <form action="" onSubmit={handleSubmit}>
    <input type="text" name="username" value={form.username}  onChange={handleChange}/>
    <input type="text" name="password"  value={form.password}  onChange={handleChange} />
    <button type="submit" > submit</button>
  </form>;
}

export default Singleform;
