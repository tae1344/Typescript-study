import * as React from "react";
import { Link } from "react-router-dom";

export const LoginComponent = (props) => (
  <div>
    <h2>Hello from Login Page</h2>
    <br />
    <Link to="/pageB">Navigate to Page B</Link>
  </div>
);
