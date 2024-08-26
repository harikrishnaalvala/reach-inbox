import { Box } from "@mui/material";

import { useEffect } from "react";
import { useLocation, useNavigate} from "react-router";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../Components/MenuItem";
import HeadPart from "../Components/HeadPart";
import MailPage from "../Components/MailPage";
import FirstPage from "../Components/FirstPage";


function HOME() {
  const mails = useSelector((state) => state.mails);
  
  const store = useSelector((state)=>state)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = new Date();
  // var initialMails = [
  //   {
  //     fromEmail: "Beata@gmail.com",
  //     status: "Interested",
  //     subject: "I've tried a lot and .",
  //     sentAt: "Mar 7",
  //     col: "#57E0A6",
  //     secCol: "#2D3833",
  //   },
  //   {
  //     fromEmail: "Sanya@gmail.com",
  //     status: "Closed",
  //     subject: "I've tried a lot and .",
  //     sentAt: "Mar 7",
  //     col: "#626fe6",
  //     secCol: "#323440",
  //   },
  //   {
  //     fromEmail: "William@gmail.com",
  //     subject: "Payment not going through",
  //     status: "Interested",
  //     sentAt: "Mar 7",
  //     col: "#57E0A6",
  //     secCol: "#2D3833",
  //   },
  //   {
  //     fromEmail: "johnson@gmail.com",
  //     status: "Meeting Booked",
  //     subject: "Could you tell me more about it",
  //     sentAt: "Mar 7",
  //     col: "#9c62e6",
  //     secCol: "#352f3c",
  //   },
  //   {
  //     fromEmail: "Sanya@gmail.com",
  //     subject: "Hi, I am Interested",
  //     sentAt: date,
  //     status: "Meeting Completed",
  //     col: "#E6D162",
  //     secCol: "#444234",
  //   },
  // ];
  useEffect(() => {
    const getMails = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      console.log("REDIRECT:", isLoggedIn);
      if (!isLoggedIn) {
        navigate("/google-login");
        return;
      }
      const tok = localStorage.getItem("token");
      const res = await fetch(
        "https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tok}`,
          },
        }
      );
      
      const mails = await res.json();
      console.log(mails.data);
     
      dispatch({ type: "MAILS", payload: mails.data });
      
     
        
      
      
    };
    getMails()
  }, []);
  const location = useLocation();
  const token = location.search.substring(7);
  localStorage.setItem("token", token);



  return (

    <>
   
      <Box sx={{ display: "flex" }}>
        <MenuItem/>

        <Box
          sx={{
            display: "flex",
            left: "56px",
            flexDirection: "column",
            position: "relative",
            
            width: "95.5%",
          }}
        >
          <HeadPart />
          {mails.length > 0 ?<MailPage /> : <FirstPage />}
        </Box>
      </Box>
    </>
  );
}

export default HOME;