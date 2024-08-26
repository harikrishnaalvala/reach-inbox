import React from 'react'
import { Box, Link } from "@mui/material";
import logom from "../assets/mlogo.png";
import Dl from "../assets/Dlogo.png";
import mhome from "../assets/menubarHOME.png";
import memail from "../assets/menubarEmail.png";
import macct from "../assets/menubarEmailAcc.png";
import msend from "../assets/menubarsendemail.png";
import barmenu from "../assets/menubarMENU.png";
import almail from "../assets/Frame.png";
import bar from "../assets/bar.png";
import { useDispatch, useSelector } from "react-redux";


const MenuItem = () => {
  
    const theme = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
   
   
    return (
       <>
        <Box
          sx={{
            height: "100vh",
            width: "56px",
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            borderRight: `1px solid ${theme ? "#343a40" : "#D8D8D8"}`,
            alignItems: "center",
            bgcolor: theme ? "#101113" : "#FAFAFA",
          }}
        >
          <img
           onClick={() => dispatch({ type: "MAILS", payload: [] })}
           src={theme ? logom : Dl}
            alt="logoM"
            width="26px"
            className="m-8 mt-6"
           
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              mt: "20px",
            }}
          >
           
              <img
                src={mhome}
                alt="menubarHOME"
                width="26px"
                height="18px"
              />
          
           
              <img src={memail} alt="menubarEmail" width="26px" />
           
          
              <img src={macct} alt="menubarEmailAcc" width="26px" />
           
          
              <img src={msend} alt="menubarsendemail" width="26px" />
              
            
              <img src={barmenu} alt="menubarMENU" width="26px" />
            
          
              <img src={almail} alt="menubarAllEmail" width="26px" />
          
          
              <img src={bar} alt="menubarBarChart" width="26px" />
          
          </Box>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "green",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "200px",
              
            }}
          >
            AL
          </Box>
        </Box>
      </>
    );
  }
export default MenuItem