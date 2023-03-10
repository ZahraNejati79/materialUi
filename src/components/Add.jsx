import {
  makeStyles,
  Container,
  Tooltip,
  Fab,
  Modal,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/Posts/postsAction";

const useStyles = makeStyles((theme) => ({
  radio: {
    "&$checked": {
      color: "#3f51b5",
    },
  },
  checked: {},
  addIcon: {
    position: "fixed",
    right: 10,
    bottom: 10,
  },
  modalContainer: {
    width: "30rem",
    [theme.breakpoints.down("xs")]: {
      width: "95vw",
    },
    height: 600,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    backgroundColor: "white",
    padding: theme.spacing("2"),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textArea: {
    transformOrigin: "top right",
    marginTop: 10,
    marginBottom: 20,
  },
  formButton: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginRight: 10,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add() {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    caption: "",
    access: "",
  });

  const changeHandler = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const closeHandler = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setOpenAlert(true);
    setPostData({
      title: "",
      caption: "",
      access: "",
    });
    dispatch(addPost(postData));
  };
  return (
    <>
      <Tooltip
        onClick={() => setOpenModal(true)}
        className={classes.addIcon}
        title="افزودن پست"
        aria-label="add"
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal onClose={() => setOpenModal(false)} open={openModal}>
        <Container className={classes.modalContainer}>
          <form onSubmit={submitHandler} className={classes.form}>
            <TextField
              id="outlined-basic"
              label="عنوان پست"
              variant="outlined"
              name="title"
              value={postData.title}
              onChange={changeHandler}
            />
            <TextField
              className={classes.textArea}
              id="outlined-multiline-static"
              label="داستان خودت را بگو"
              multiline
              rows={10}
              defaultValue=""
              variant="outlined"
              name="caption"
              value={postData.caption}
              onChange={changeHandler}
            />
            <FormControl
              className={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabel,
              }}
              component="fieldset"
            >
              <FormLabel component="legend">دسترسی کامنت گذاری</FormLabel>
              <RadioGroup
                aria-label="access"
                name="access"
                value={postData.access}
                onChange={changeHandler}
              >
                <FormControlLabel
                  value="everybody"
                  control={
                    <Radio
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="همه"
                />
                <FormControlLabel
                  value="friends"
                  control={
                    <Radio
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="دوستان"
                />
                <FormControlLabel
                  value="nobody"
                  control={
                    <Radio
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="هیچکس"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={
                    <Radio
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="سفارشی (کاربران ویژه)"
                />
              </RadioGroup>
            </FormControl>
            <div className={classes.formButton}>
              <Button type="submit" variant="outlined" color="primary">
                ارسال
              </Button>
              <Button
                onClick={() => setOpenModal(false)}
                variant="outlined"
                color="secondary"
              >
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={closeHandler}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={closeHandler} severity="success">
          پست شما با موفقیت ارسال شد :)
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
