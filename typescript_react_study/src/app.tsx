import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState("Iron man!");

  const setUserNameState = (newName: string) => {
    setName(newName);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent initialUserName={name} onNameUpdated={setUserNameState} />
    </>
  );
};
