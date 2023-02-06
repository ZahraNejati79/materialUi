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
import { Mail, Search, Notifications, Cancel } from "@material-ui/icons";
import { useState } from "react";

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
      display: (props) => (props.openSearch ? "flex" : "none"),
      width: "60%",
    },
  },
  inputSearch: {
    color: "white",
    marginRight: theme.spacing(1),
    width: "100%",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  icons: {
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.openSearch ? "none" : "flex"),
    },
    display: "flex",
    justifyContent: "justify-between",
    alignItems: "center",
  },
  searchIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancelIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const classes = useStyles({ openSearch });
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
            <InputBase
              className={classes.inputSearch}
              placeholder="جستوجو کنید..."
            />
            <Cancel
              onClick={() => setOpenSearch(false)}
              className={classes.cancelIcon}
            />
          </div>
          <div className={classes.icons}>
            <Search
              onClick={() => setOpenSearch(true)}
              className={classes.searchIcon}
            />
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
