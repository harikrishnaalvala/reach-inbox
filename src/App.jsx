import { BrowserRouter } from "react-router-dom";
import AllRoute from "./Routing/AllRoute";
import store from "./Redux/store";
import { Paper, ThemeProvider } from "@mui/material";
import { theme } from "./Redux/action";
import { Provider } from "react-redux";



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Paper>
    <Provider store={store}>
    <BrowserRouter>
      <AllRoute />
    </BrowserRouter>
    </Provider>
    </Paper>
    </ThemeProvider>
    </>
  );
}

export default App;
