import React, { useEffect } from "react";
import Link from "next/link";
import { loadTimelineData } from "anima-timeline";

function SizebigColorbleu2() {
  useEffect(() => {
    loadTimelineData(i107334932314TimelineData);
  }, []);

  return (
    <Link href="/10-home">
      <div className="i1073349-32314 component component-wrapper not-ready">
        <div className="group-36-hPR2eo">
          <div className="group-24-xLzxdw">
            <img className="union-rhAING" src="/img/union-6@2x.svg" />
            <img className="subtract-rhAING" src="/img/subtract-31@2x.svg" />
            <img className="subtract-JMxavR" src="/img/subtract-32@2x.svg" />
          </div>
          <img className="mieux-voter-xLzxdw" src="/img/mieux-voter-5@2x.svg" />
        </div>
      </div>
    </Link>
  );
}

const i107334932314TimelineData = [
  {
    initial_state_name: "size=big-color=bleu",
    root_element: ".i1073349-32314",
    states_flow: {
      "size=big-color=blanc": {
        listeners: [],
        overrides: {},
      },
      "size=big-color=bleu": {
        listeners: [],
        overrides: {},
      },
      "size=small-color=blanc": {
        listeners: [],
        overrides: {},
      },
      "size=small-color=bleu": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default SizebigColorbleu2;
