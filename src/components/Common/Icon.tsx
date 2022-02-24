import React, { FunctionComponent } from "react";
import styled from '@emotion/styled'


import { icons } from "../../assets/icons";

type IconProps = {
    icon: any
}


const Icon: FunctionComponent<IconProps> = function ({ icon }) {
    return (
        <Svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
        >
            {icons[icon]}
        </Svg>
    );
};


export default Icon;

const Svg = styled.svg`
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);

  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
