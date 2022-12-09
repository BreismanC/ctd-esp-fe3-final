import React from "react";
import { useState } from "react";

const Form = () => {

const [values, setValues] = useState({
  name: "",
  email: "",
})

const [validation, setValidation] = useState(false)

const nameValidation = () => {
  let userName = values.name.split(" ")
  if(userName.length < 2) return alert ("Please enter first and last name")
  if(userName[0].length < 3 && userName[1].length < 3 ) return alert("Please enter a valid first or last name")
  return true
}

const emailValidation = () => {

  let userEmail = values.email.split("@")
  if(userEmail.length < 2) return alert("Incorrect email, must contain an '@' and a valid extension such as '.com'")
  
  let anotherValidation = userEmail[1].split(".")
  if(anotherValidation.length < 2) return alert("Incorrect email, must contain an '@' and a valid extension such as '.com'")

  return true
}

const handleChanges = (e) =>{
  const {target} = e
  const {name, value} = target

  const newValue = {
    ...values,
    [name]:value,
  }
    setValues(newValue)
}

const handleSubmit = (e) => {

  e.preventDefault()

  let validationName = nameValidation()

  let validationEmail = emailValidation()

  if (validationName && validationEmail) {
    setValidation(true)
  }
}

  return (
    <div className="container-form">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" className="input-form" onChange={handleChanges} />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" className="input-form" onChange={handleChanges} />
      <button className="btn btn-primary" type="submit">Send</button>
    </form>
    {validation ? <h3 className="h3">Thank you for contacting us {values.name}, an assistant will be contacted as soon as possible! </h3> : ""}
  </div>
  );
};

export default Form;
