import { Grid, makeStyles } from "@material-ui/core";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
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
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.leftBar}>
          <Leftbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
