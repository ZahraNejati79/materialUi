import { Grid, makeStyles } from "@material-ui/core";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import store from "./redux/store";
import { Provider } from "react-redux";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
const useStyles = makeStyles((theme) => ({
  leftBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
