import React from "react";
import useStyles from "./style";
import { Header } from "Components";
import LockIcon from "@material-ui/icons/Lock";
import {
  Typography,
  TextField,
  InputAdornment,
  Container,
  Button,
  Link
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const Layout = props => {
  const classes = useStyles();
  return (
    <>
      <Header title="Login" />
      <Container className={classes.Container} maxWidth="md">
        <div className={classes.SingIn}>
          <div className={classes.SignInContent}>
            <div className={classes.SignInForm}>
              <form className={classes.SignInForm}>
                <div className={classes.SignInFormInput}>
                  <Typography variant="h3" className={classes.FormTitle}>
                    Sing In
                  </Typography>
                  <TextField
                    className={classes.TextField}
                    id="input-with-icon-AcccountCircle"
                    fullWidth
                    size="medium"
                    placeholder="Username Or Email"
                    type="Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon style={{ color: "#222222" }} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    className={classes.TextField}
                    id="input-with-icon-Lock"
                    placeholder="Password"
                    fullWidth
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon
                            style={{
                              color: "#222222"
                            }}
                          />
                        </InputAdornment>
                      )
                    }}
                  />
                  <div className={classes.Button}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.SigninButton}>
                      Sing In
                    </Button>
                  </div>
                  <div className={classes.links}>
                    <Link className={classes.link}>Forget Password !!</Link>
                    <Link className={classes.link}>
                      New Here ?? Register Here
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className={classes.signInImage}>
              <figure>
                <img
                  src="./images/signin-image.jpg"
                  alt="signin Referecence Pages"
                />
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Layout;
