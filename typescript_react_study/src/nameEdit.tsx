import * as React from "react";

interface Props {
  userName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // TS에서 e객체의 타입이 React.ChangeEvent<HTMLInputElement>
}

export const NameEditComponent = (props: Props) => (
  <>
    <label>Update Name:</label>
    <input value={props.userName} onChange={props.onChange} />
  </>
);
