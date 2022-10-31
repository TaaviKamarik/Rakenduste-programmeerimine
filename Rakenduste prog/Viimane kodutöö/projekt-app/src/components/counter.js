import { Button } from "@mui/material"
import { integerPropType } from "@mui/utils"
import React from "react"
import { useState, useEffect } from "react"

const Counter = props => {
  const [counter, setCounter] = useState(0)

  //ilma dependancy arrayta
  useEffect(() => {
    document.title = `Taavi counter: " ${counter}`
  })

  //tühi dependency array
  useEffect(() => {
    console.log("Mitu korda käivitub?")
  }, [])

  //täidetud dependency array
  useEffect(() => {
    console.log("Mitu korda käivitub?")
  }, [counter])

  return (
    <Button
      color="success"
      variant="contained"
      onClick={() => setCounter(counter + 1)}
    >
      +1
    </Button>
  )
}

Counter.propTypes = {}

export default Counter
