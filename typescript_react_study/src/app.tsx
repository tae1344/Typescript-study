import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState("Iron man!");

  const setUserNameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent userName={name} onChange={setUserNameState} />
    </>
  );
};
