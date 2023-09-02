import React, { useState } from "react";

function FormCard({ clsInput, clsForm, clsBtn }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
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
    console.log(form.username, form.password);
    // some code
    setForm({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <form action="" className={clsForm} onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-control">
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          name="username"
          id="username"
          className={clsInput}
          value={form.username  || "baris"}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={clsInput}
          value={form.email || "baris@gmail.com"  }
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={clsInput}
          value={form.password || "baris@gmail.com" }
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={clsBtn}>
        <span>Submit</span>
      </button>
    </form>
  );
}

export default FormCard;
