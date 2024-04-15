import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  email: string;
}

const SignupForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ email: "" });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email.trim() === "") {
      setErrorMessage("Oops! Please add your email");
    } else {
      if (validateEmail(form.email)) {
        setForm({ email: "" });
        setErrorMessage("");
      } else {
        setErrorMessage("Oops! Please check your email");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email address"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
        <button type="submit"> Request Access</button>
      </form>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default SignupForm;
