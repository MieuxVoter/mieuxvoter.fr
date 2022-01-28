
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import {Box, Text, Image, Flex} from 'theme-ui';
import React, {Fragment} from "react";
import "semantic-ui-css/semantic.min.css";
import WithVideo from "./with-video";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const VideoCarousel = ({videos = []}) => {
  return (
    <Fragment>

      <Box>
        <WithVideo videos={videos} />
      </Box>

    </Fragment>
  );
};
VideoCarousel.getInitialProps = ({req}) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return {deviceType};
};
export default VideoCarousel;
