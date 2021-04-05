import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";
import { Form, Formik } from "formik";
import { loginFormValidation } from "./login.validation";
import { TextFieldComponent } from "../common";

interface PropsForm {
  onLogin: (login: LoginEntity) => void;
}

const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);

export const LoginComponent: React.FC<PropsForm> = (props) => {
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(createEmptyLogin());
  const classes = useFormStyles();
  const onTextFieldChange = (fieldId) => (e) => {
    setLoginInfo({
      ...loginInfo,
      [fieldId]: e.target.value,
    });
  };

  return (
    <Formik onSubmit={onLogin} initialValues={createEmptyLogin()} validate={loginFormValidation.validateForm}>
      {() => (
        <Form>
          <div className={classes.formContainer}>
            <TextFieldComponent label="Name" name="login" />
            <TextFieldComponent label="Password" type="password" name="password" />
            <Button variant="contained" color="primary" onClick={() => onLogin(loginInfo)}>
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
