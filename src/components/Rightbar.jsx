import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    cursor: "pointer",
  },
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    height: "100vh",
    color: "#555",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    [theme.breakpoints.up("sm")]: {
      borderLeft: "1px solid #eee",
    },
  },
  icon: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontSize: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    marginRight: theme.spacing(1),
  },
}));
function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          خانه
        </Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          دوستان
        </Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          دوربین
        </Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          اپ
        </Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          مجموعه ها
        </Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          بازار
        </Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          تنظیمات
        </Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text} variant="h8">
          خروج
        </Typography>
      </div>
    </Container>
  );
}

export default Rightbar;
