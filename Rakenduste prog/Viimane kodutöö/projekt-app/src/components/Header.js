import React from "react"
import { AppBar, Box, Button, Tab, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"}}>
          <Button variant="text"><Link style={{textDecoration: "none", color: "white"}} to="/">HOME</Link></Button>
          <Button variant="text"><Link style={{textDecoration: "none", color: "white"}} to="/table">TABLE</Link></Button>
          <Button variant="text"><Link style={{textDecoration: "none", color: "white"}} to="/toggle">TOGGLE</Link></Button>
          </Box>

          </Toolbar>

      </AppBar>

    </>
  )
}

export default Header
