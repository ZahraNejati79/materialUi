import { Grid, makeStyles } from "@material-ui/core";
import Add from "../components/Add";
import { Provider } from "react-redux";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import store from "../redux/store";

const useStyles = makeStyles((theme) => ({
  leftBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          {children}
        </Grid>
        <Grid item sm={3} className={classes.leftBar}>
          <Leftbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default Layout;
