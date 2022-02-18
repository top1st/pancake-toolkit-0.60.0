import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";
import mintysPng from "./mintys.png"


const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image href={mintysPng} width={128} height={128}/>
    </Svg>
  );
};

export default Icon;
