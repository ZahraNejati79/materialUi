import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  Button: {
    ...theme.palette.primaryButton,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Button
          variant="contained"
          size="large"
          startIcon={<Person />}
          // style={{ backgroundColor: "#111", color: "white" }}
          className={classes.Button}
        >
          سلام دنیا
        </Button>
      </div>
    </div>
  );
}

export default App;
