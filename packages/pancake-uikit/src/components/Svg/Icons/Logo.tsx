import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 72 72" width={32} height={32} {...props}>
      <image href="/logo.png"/>
    </Svg>
  );
};

export default Icon;
