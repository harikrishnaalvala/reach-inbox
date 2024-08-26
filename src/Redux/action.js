import { createTheme } from "@mui/material";

export const login = () => {
    return { type: "LOGIN" };
  };


// export const getnewmails = (mails)=>({
//   type:"GETMAILS",
//   payload:mails
// })

  export const theme=createTheme({
    palette: {
        type: "dark",
      },
})