import * as React from "react";
import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker,
  SidebarComponent,
  MemberTableComponent,
} from "./components";
import { LoginContainer } from "./pages/login.container";
import { PageB } from "./pages/pageB";
import { Color } from "./model/color";
import { HashRouter, Switch, Route } from "react-router-dom";

export const App = () => {
  const [name, setName] = React.useState("Iron man!");
  const [editingName, setEditingName] = React.useState("Iron man!");
  const [color, setColor] = React.useState<Color>({ red: 20, green: 40, blue: 180 });
  const [isVisible, setIsVisible] = React.useState(false);

  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 500);
  };

  React.useEffect(() => {
    loadUsername();
  }, []);

  const setUserNameState = () => {
    setName(editingName);
  };

  return (
    <>
      <SidebarComponent isVisible={isVisible}>
        <h1>Cool Scfi movies</h1>
        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0062622/">2001: a space odyssey</a>
          </li>
        </ul>
      </SidebarComponent>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginContainer} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
      {/* <MemberTableComponent /> */}
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        onNameUpdated={setUserNameState}
        editingName={editingName}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === "" || editingName === name}
      />
      <div style={{ float: "right" }}>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Sidebar</button>
      </div>
    </>
  );
};
