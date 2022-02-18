import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <image href="/loading.png" width={256} height={256} />
    </Svg>
  );
};

export default Icon;
