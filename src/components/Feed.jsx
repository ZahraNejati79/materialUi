import { makeStyles, Container } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  conteiner: {
    paddingTop: theme.spacing(10),
  },
}));
function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.conteiner}>
      <Post />
    </Container>
  );
}

export default Feed;
