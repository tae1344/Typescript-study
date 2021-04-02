import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState("Iron man!");
  const [editingName, setEditingName] = React.useState("Iron man!");

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
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        onNameUpdated={setUserNameState}
        editingName={editingName}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === "" || editingName === name}
      />
    </>
  );
};
