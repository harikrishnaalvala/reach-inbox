import React from "react";
import { Typography, Box } from "@mui/material";
import lm from "../assets/light_mode.png";
import dm from "../assets/dark_mode.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeadPart = () => {
    const theme = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
    useEffect(() => {
      const slider =
        document.getElementById("outerbox1") ||
        document.getElementById("insidecircle1");
      slider.addEventListener("click", () => {
        const circle = document.getElementById("insidecircle1");
        if (getComputedStyle(circle).left == "5px") {
          circle.style.left = "50%";
        } else {
          circle.style.left = "5px";
        }
      });
    }, []);
    const handleDarkMode = () => {
      dispatch({ type: "THEME" });
    };

  return (
    <>
      <Box
        sx={{
           height: "64px",
           display: "flex",
           color: "white",
           justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: `1px solid ${theme ? "#343a40" : "#D8D8D8"}`,
          bgcolor: theme ? "#202022" : "#FAFAFA",
          
        }}
      >
        <Typography
          sx={{
            bgcolor: theme ? "#202022" : "#FAFAFA",
            color: theme ? "#FAFAFA" : "#000000",
          }}
        >
          OneBox
        </Typography>

        <Box className="flex items-center gap-5">
          <Box
            id="outerbox1"
            sx={{
              bgcolor: theme ? "#222428" : "#E9EAEC",
              border: `1px solid  ${theme ? "#33383F" : "#e5e7e9"}`,
            }}
            onClick={handleDarkMode}
          >
            <img
              style={{ position: "absolute", top: "7px", left: "30px" }}
              src={lm}
              alt="lightMode"
            />
            <img
              style={{ position: "absolute", top: "7px", left: "10px" }}
              src={dm}
              alt="darkMode"
         
            />
            <Box sx={{ bgcolor: "#7E7d7E" }} id="insidecircle1"></Box>
          </Box>
         
          <Box className="flex">
            <Typography sx={{ color: theme ? "#FAFAFA" : "#000000" }}>
              Tim's WorkSpace
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: theme ? "white" : "black" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeadPart;
