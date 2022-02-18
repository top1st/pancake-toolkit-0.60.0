import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { MENU_HEIGHT } from "../../../widgets/Menu/config";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 256 178" width={MENU_HEIGHT} height={MENU_HEIGHT} {...props}>
      <image href="/logo-text.png"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
