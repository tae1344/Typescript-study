import * as React from "react";
import "./sidebar.css";
//const classNames = require("./sidebar.css");

interface Props {
  isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisible ? "23rem" : "0rem",
});

export const SidebarComponent = (props) => (
  <div id="mySidenav" className="sidenav" style={divStyle(props)}>
    {/* <span>Basic side bar, first steps</span> */}
    {props.children}
  </div>
);
