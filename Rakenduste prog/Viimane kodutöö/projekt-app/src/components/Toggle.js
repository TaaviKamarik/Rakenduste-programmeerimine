import { Typography } from "@mui/material"
import React, { useEffect } from "react"

const Toggle = props => {
  const handleKeyDown = e => {
    console.log(e.code)
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return <Typography>Key event listener</Typography>
}
export default Toggle
