import React, { useContext, useState } from "react"
import UserContext from "../UserContext";
import { Button, Input, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import  axios from  "axios";

 function Home (){

  const {value, setValue} = useContext(UserContext);

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const nameInput = useRef();
  const mailInput = useRef();
  const passInput = useRef();

  const handleSubmit = event => {
    console.log(nameInput.current.value, mailInput.current.value, passInput.current.value)
    event.preventDefault()
  }

  function getAll(){

axios.post("http://localhost:8080/auth/signup", {
  name : "nimi",
  email: "mail@mail.tt",
  password: "123433"
}).then(function (response){
  console.log(response).catch(function (error){
    console.log(error)
  })
 })

}

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

getAll();

  return(
    <div>

      <h2>{value}</h2>
      <Button onClick={() => setValue("head Aega")}>Muuda</Button>

      <form onSubmit={handleSubmit}>
        <Input
        inputRef={nameInput}
        type="text"
        onChange={event => setName(event.target.value)}
        placeholder="Nimi"></Input>
        <Input
        inputRef={mailInput}
        type="email"
        onChange={event => setMail(event.target.value)}
        placeholder="Email"></Input>
        <Input
        inputRef={passInput}
        type="password"
        onChange={event => setPass(event.target.value)}
        placeholder="Password"></Input>
        <Button type="submit">Submit</Button>
      </form>

    </div>
  )

}

export default Home
