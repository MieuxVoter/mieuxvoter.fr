import React, {useState} from "react";
import VisibilitySensor from "react-visibility-sensor";
import {Embed} from "semantic-ui-react";

const Video = ({id, source = "youtube", placeholder = '/img/background-youtube.png'}) => {
  const [visible, setVisibile] = useState(false);
  return (
    <VisibilitySensor
      onChange={isVisible => {
        if (isVisible && !visible) {
          setVisibile(true);
        }
        if (!isVisible && visible) {
          setVisibile(false);
        }
      }}
      partialVisibility
    >
      <Embed hd={false} autoplay={false} id={id} placeholder={placeholder} source={source} />

    </VisibilitySensor>
  );
};

export default Video;
