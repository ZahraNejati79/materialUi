import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
  headerPost: {
    marginBottom: theme.spacing("2"),
  },
  card: {
    marginBottom: theme.spacing("2"),
  },
}));
function Post({ post }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            image="https://cdn.dribbble.com/userupload/4487845/file/original-de44ed4942947e78f130473ed04f99e2.jpg?compress=1&resize=1200x1200"
            title="post1"
          />
          <CardContent>
            <Typography className={classes.headerPost} variant="h5">
              {post.title}
            </Typography>
            <Typography variant="body">{post.caption}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            بیشتر بخوانید
          </Button>
          <Button size="small" color="primary">
            اشتراک گذاری
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
