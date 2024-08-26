import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";

function DeleteModal({ setDeleteMail }) {
  const theme = useSelector((state) => state.darkMode);
  const handleDelete = async () => {
    const tok = localStorage.getItem("token");
    const res = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/messages/3",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      }
    );
    const mailDeleted = await res.json();
  };
  return (
    <>
      <Box
        className="flex flex-col justify-around items-center"
        sx={{
          width: "443px",
          height: "249px",
          padding: "32px 24px",
          gap: "16px",

          zIndex: "10",
          borderRadius: "8px ",
          border: "1px solid #23272C",
          color: theme ? "white" : "black",

          background: `linear-gradient(90deg, ${
            theme ? "#141517" : "#ffffff"
          } 0%, ${theme ? "#232528" : "#E0E0E0"}  100%)`,

          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32.68px",
            textAlign: "center",
            color: theme ? "white" : "black",
          }}
        >
          Are you sure?
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "20.15px",
            textAlign: "left",

            color: theme ? "#E8E8E8" : "black",
          }}
        >
          Your selected email will be deleted.
        </Typography>
        <Box className="flex gap-8">
          <Button
            sx={{
              border: "none",
              width: "119px",
              height: "48px",
              bgcolor: theme ? "#25262B" : "#ECEFF3",
              color: theme ? "white" : "black",
            }}
            variant="outlined"
            onClick={() => setDeleteMail(false)}
          >
            Cancel
          </Button>
          <Button
            sx={{
              border: "none",
              width: "152px",
              height: "48px",
              bgcolor: "white",
              background:
                "linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%)",
              color: "white",
            }}
            onClick={handleDelete}
            variant="contained"
          >
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default DeleteModal;

// Delete button is working fine


