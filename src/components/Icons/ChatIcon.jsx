import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChatIcon = (props) => (
  <Svg
    fill={props.stroke || '#747373'}
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    viewBox="0 0 52 52"
    enableBackground="new 0 0 52 52"
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M26,4C12.7,4,2.1,13.8,2.1,25.9c0,3.8,1.1,7.4,2.9,10.6c0.3,0.5,0.4,1.1,0.2,1.7l-3.1,8.5 c-0.3,0.8,0.5,1.5,1.3,1.3l8.6-3.3c0.5-0.2,1.1-0.1,1.7,0.2c3.6,2,7.9,3.2,12.5,3.2C39.3,48,50,38.3,50,26.1C49.9,13.8,39.2,4,26,4z  M14,30c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S16.2,30,14,30z M26,30c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S28.2,30,26,30z M38,30 c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S40.2,30,38,30z" />
  </Svg>
);
export default ChatIcon;
