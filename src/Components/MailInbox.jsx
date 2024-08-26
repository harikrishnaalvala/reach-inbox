import { Box, Input, Typography, Button } from "@mui/material";

import ReplayIcon from "@mui/icons-material/Replay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import MailCard from "./MailCard";
function MailInbox() {
  const theme = useSelector((state) => state.darkMode);
  const mails = useSelector((state) => state.mails);

  return (
    <Box
      sx={{
        width: "278px",
        padding: "10px",
        bgcolor: theme ? "#000000" : "#FAFAFA",
        color: theme ? "#FAFAFA" : "#000000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "27.24px",
            textAlign: "left",
            color: "#4285F4",
          }}
        >
          All Inbox(s)
          <KeyboardArrowDownIcon />
        </Typography>
        <Box
          className="flex justify-center items-center"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "4px",
            bgcolor: theme ? "#25262B" : "#ffffff",
          }}
        >
          <ReplayIcon />
        </Box>
      </Box>
      <Box sx={{ marginY: "15px" }}>
        <strong>2/2</strong> Inbox selected
      </Box>
      <Box
        className="flex items-center"
        sx={{
          width: "100%",

          height: "28px",

          bgcolor: theme ? "#23272C" : "#f4f6f8",
          padding: "4px 6px",
          gap: "4px",
          borderRadius: "4px",
          border: "1px solid transparent",
        }}
      >
        <SearchIcon
          sx={{
            color: theme ? "#FFFFFF" : "#ADBAC7",
            opacity: theme ? 0.2 : 1,
          }}
        />
        <Typography sx={{ color: theme ? "#FFFFFF" : "#ADBAC7" }}>
          Search
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          paddingBottom: "15px",

          borderBottom: `1px solid ${theme ? "#203137" : "transparent"}`,
          justifyContent: "space-between",
        }}
      >
        <Box className="flex items-center gap-2">
          <Typography
            sx={{
              width: "34px",
              height: "26px",
              padding: "3px 8px",
              gap: "8px",
              color: "#5C7CFA",
              borderRadius: "17px  ",

              bgcolor: theme ? "#222426" : "#ECECEC",
            }}
          >
            26
          </Typography>
          <Typography>New Replies</Typography>
        </Box>
        <Typography>Newest</Typography>
        <KeyboardArrowDownIcon />
      </Box>

      <Box>
        {mails.map((mail) => (
          <MailCard mail={mail} />
        ))}
      </Box>
    </Box>
  );
}

// Display the cards

export default MailInbox;




