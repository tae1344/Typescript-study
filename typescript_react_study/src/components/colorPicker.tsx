import * as React from "react";
import { Color } from "../model/color";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

interface PropsColorSlider {
  value: number;
  onValueUpdated: (newValue: number) => void;
}

const updateColor = (props: Props, colorId: keyof Color) => (value) => {
  props.onColorUpdated({
    ...props.color, // 현재 props.color 객체의 복사본
    [colorId]: value, // 추가되는 색상 배열값
  });
};

const ColorSliderComponent = (props: PropsColorSlider) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={(event) => props.onValueUpdated(+event.target.value)}
      />
      {props.value}
    </div>
  );
};

export const ColorPicker = (props: Props) => (
  // 리팩토링 1
  //   <div>
  //     <ColorSliderComponent value={props.color.red} onValueUpdated={updateColor(props, "red")} />
  //     <br />
  //     <ColorSliderComponent value={props.color.green} onValueUpdated={updateColor(props, "green")} />
  //     <br />
  //     <ColorSliderComponent value={props.color.blue} onValueUpdated={updateColor(props, "blue")} />
  //     <br />
  //   </div>

  // 리팩토링 2
  <>
    {Object.keys(props.color).map((field: keyof Color) => {
      //console.log("key ::: ", Object.keys(props.color));
      return <ColorSliderComponent key={field} value={props.color[field]} onValueUpdated={updateColor(props, field)} />;
    })}
  </>
);
