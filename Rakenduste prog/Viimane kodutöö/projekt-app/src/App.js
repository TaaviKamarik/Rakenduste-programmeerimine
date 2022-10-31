import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import { useState } from "react"


import Header from "./components/Header"
import Table from "./components/Table"
import Toggle from "./components/Toggle"
import UserContext from "./UserContext"
import SignUpPage from "./pages/SignUpPage"


const App = () => {

  const [value, setValue] = useState(
    window.sessionStorage.getItem("user")
  )

  return (
      <>
      <div>
      <Header/>
      </div>
        <div className="App">
          <BrowserRouter>
            <UserContext.Provider value = {{ value, setValue }}>
              <Routes>
              
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/todo" element={<TodoPage/>}/>
                <Route path="*" element={<NotFound/>}/>
                
              </Routes>
            </UserContext.Provider>
          </BrowserRouter>
    </div>
    
    </>

  )
}
//const [show, setShow] = React.useState(true)
/*  const [show, setShow] = useState(true)


  

  return (

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        height: "100vh"
      }}
    >
      <Counter />
      {show && <Toggle/>}
      <Button
      color="error"
      variant="contained"
      onClick={()=>setShow(!show)}>Toggle toggle</Button>
    </Box>
  )
}

//Ternary operator
const Popup = ({ show, setShow = { setShow } }) => {
  return (
    <>
      <Typography>{show ? "Showing" : "Hidden"}</Typography>
    </>
  )
} */

/* const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello world</h1>
       <PropExample name='taavi'/>
       <PropExample/>
       
      </header>
    </div>
  );
} */

//Esimene võimalus propsidele
//const PropExample = (props) => <h1>Hello {props.name}</h1>

//Teine võimalus
/* const PropExample = (props) => {
  const {name} = props
  return <h1>Hello {name}</h1>
} */

//Kolmas võimalus
//const PropExample = ({name = 'Jane Doe'}) => <h1>Hello {name}</h1>

/* PropExample.defaultProps = {
  name: 'John Doe'
}
 */
//PropTypes

export default App
