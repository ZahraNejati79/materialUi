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
function Post() {
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
              پست اول
            </Typography>
            <Typography variant="body">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            </Typography>
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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            image="https://cdn.dribbble.com/users/3362230/screenshots/20568677/media/667b3324799892470c61b00bfcc4d3bd.png?compress=1&resize=1000x750&vertical=top"
            title="post1"
          />
          <CardContent>
            <Typography className={classes.headerPost} variant="h5">
              پست دوم
            </Typography>
            <Typography variant="body">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            </Typography>
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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            image="https://cdn.dribbble.com/userupload/4484825/file/original-36fd81878bb930608eabf4da7c60f48d.png?compress=1&resize=1200x1500"
            title="post1"
          />
          <CardContent>
            <Typography className={classes.headerPost} variant="h5">
              پست سوم
            </Typography>
            <Typography variant="body">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            </Typography>
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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            image="https://cdn.dribbble.com/users/9409741/screenshots/20569928/media/7fa148830e24ebb0694528e63d5575fd.jpg?compress=1&resize=800x600&vertical=top"
            title="post1"
          />
          <CardContent>
            <Typography className={classes.headerPost} variant="h5">
              پست چهارم
            </Typography>
            <Typography variant="body">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            </Typography>
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
