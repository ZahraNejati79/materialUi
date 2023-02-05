import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Mail, Search, Notifications } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  inputSearch: {
    color: "white",
    marginRight: theme.spacing(1),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  icons: {
    display: "flex",
    justifyContent: "justify-between",
    alignItems: "center",
  },
  searchIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.logoLg}>
            وبلاگ تاپلرن
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            تاپلرن
          </Typography>
          <div className={classes.searchBox}>
            <Search />
            <InputBase className="inputSearch" placeholder="جستوجو کنید..." />
          </div>
          <div className={classes.icons}>
            <Search className={classes.searchIcon} />
            <Badge badgeContent={4} className={classes.badge} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} className={classes.badge} color="error">
              <Notifications />
            </Badge>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
