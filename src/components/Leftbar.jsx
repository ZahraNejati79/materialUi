import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  conteiner: {
    paddingTop: theme.spacing(10),
  },
}));
function Leftbar() {
  const classes = useStyles();
  return <Container className={classes.conteiner}>Container</Container>;
}

export default Leftbar;
