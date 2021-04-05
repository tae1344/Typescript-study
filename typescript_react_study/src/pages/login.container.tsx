import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import { NotificationComponent } from "../common";
import { LoginComponent } from "./login.component";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

interface Props extends RouteComponentProps {}

export const LoginContainer: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [isShowAlert, setShowAlert] = React.useState(false);

  const loginSucceeded = (isValid: boolean) => {
    if (isValid) {
      props.history.push("/pageB");
    } else {
      setShowAlert(true);
    }
  };

  const handleLogin = (loginData: LoginEntity) => {
    isValidLogin(loginData).then(loginSucceeded);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <LoginComponent onLogin={handleLogin} />
          <NotificationComponent
            show={isShowAlert}
            message="Invalid login or password, please type again"
            onClose={() => setShowAlert(false)}
          />
        </CardContent>
      </Card>
    </>
  );
};
