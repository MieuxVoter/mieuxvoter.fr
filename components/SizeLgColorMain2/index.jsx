import React, { useEffect } from "react";
import Link from "next/link";
import { loadTimelineData } from "anima-timeline";

function SizeLgColorMain2(props) {
  const { text13, className } = props;

  useEffect(() => {
    loadTimelineData(x481220TimelineData);
  }, []);

  return (
    <Link href="/20-jugement-majoritaire">
      <div
        className={`x481220 component component-wrapper not-ready ${
          className || ""
        }`}
      >
        <div className="text-13-tf27yZ valign-text-middle">{text13}</div>
        <img className="icon-arrow-tf27yZ" src="/img/icon---arrow-1@2x.svg" />
      </div>
    </Link>
  );
}

const x481220TimelineData = [
  {
    initial_state_name: "size-=-lg-color-=-main",
    root_element: ".x481220",
    states_flow: {
      "size-=-lg-color-=-dark": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "size-=-lg-color-=-main": {
        listeners: [],
        overrides: {},
      },
      "size-=-lg-color-=-primary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "size-=-lg-color-=-red": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "size-=-lg-color-=-white": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "size-=-med-color-=-dark": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "size-=-med-color-=-white": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];

export default SizeLgColorMain2;
