import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ProfileIcon = (props) => (
  <Svg
    fill={props.stroke || '#747373'}
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    id="user"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <Path
      id="primary"
      d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z"
      style={{
        fill: "rgb(0, 0, 0)",
      }}
    />
  </Svg>
);
export default ProfileIcon;
