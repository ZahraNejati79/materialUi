import { makeStyles, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  conteiner: {
    paddingTop: theme.spacing(10),
  },
}));
function Feed() {
  const classes = useStyles();
  const posts = useSelector((state) => state.postInformation.posts);
  return (
    <Container className={classes.conteiner}>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Container>
  );
}

export default Feed;
