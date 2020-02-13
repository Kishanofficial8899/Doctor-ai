import React, { Fragment } from "react";
import useStyles from "./style";
import { Header } from "Components";
import LockIcon from "@material-ui/icons/Lock";
import {
  InputAdornment,
  TextField,
  Button,
  Container,
  Link,
  Typography
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
const Layout = props => {
  console.log(props);
  const classes = useStyles();
  return (
    <>
      <Header title="Login" />
      <Container className={classes.Container} maxWidth="md">
        <div className={classes.SingUp}>
          <div className={classes.SignUpContent}>
            <div className={classes.SignUpForm}>
              <form className={classes.SignUpForm}>
                <div className={classes.SignUpFormInput}>
                  <Typography variant="h3" className={classes.FormTitle}>
                    Sign Up
                  </Typography>
                  <TextField
                    className={classes.TextField}
                    id="input-with-icon-AcccountCircle"
                    fullWidth
                    size="medium"
                    placeholder="Name"
                    type="text"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonAddIcon style={{ color: "#222222" }} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    className={classes.TextField}
                    id="input-with-icon-AcccountCircle"
                    fullWidth
                    size="medium"
                    placeholder="Username"
                    type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon style={{ color: "#222222" }} />
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
                      className={classes.SignUpButton}>
                      Sing In
                    </Button>
                  </div>
                  <div className={classes.links}>
                    <Link className={classes.link}>
                      Already Have An Account..
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className={classes.signUpImage}>
              <figure>
                <img
                  src="./images/signup-image.jpg"
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
