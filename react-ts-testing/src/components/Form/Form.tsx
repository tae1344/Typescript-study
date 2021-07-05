import React, { ChangeEvent, FormEvent, useState } from "react";
// import Button from '../../components/Button';//
import { FormContainer, Label, Input, Button } from "./Form.style";

interface Props {
  onSearch(subreddit: string): void;
}

function Form({ onSearch }: Props) {
  const [subreddit, setSubreddit] = useState("javascript");

  const onSubmit = (event: FormEvent) => {
    console.log("event", event);
    event.preventDefault();
    onSearch(subreddit);
  };

  return (
    <FormContainer
      onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}
    >
      <Label>
        검색
        <Input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSubreddit(event.target.value)
          }
        />
      </Label>

      <Button type="submit">Search</Button>
    </FormContainer>
  );
}

export default Form;
