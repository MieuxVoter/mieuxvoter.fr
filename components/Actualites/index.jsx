import React from "react";
import Frame47 from "../Frame47";
import DON from "../DON";

function X30Actualits(props) {
  const {
    presse,
    image11,
    horizonsPublics,
    text71,
    text72,
    image112,
    horizonsPublics2,
    text73,
    text74,
    tOP3Props,
    frame47Props,
    frame472Props,
    frame473Props,
    frame474Props,
    dONProps,
    fOOTER3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x30-actualites screen">
        <div className="overlap-group2-4">
          <img
            className="rectangle-71-stroke-1"
            src="/img/rectangle-71--stroke--1@1x.svg"
          />
        </div>
        <div className="presse-15 valign-text-middle dmserifdisplay-normal-tolopea-72px">
          {presse}
        </div>
        <div className="flex-row-36">
          <Frame47
            image11={frame47Props.image11}
            libration={frame47Props.libration}
            surname={frame47Props.surname}
            parNicolasMassol={frame47Props.parNicolasMassol}
            text69={frame47Props.text69}
          />
          <div className="frame-1">
            <img className="image-11" src={image11} />
            <div className="horizons-publics valign-text-middle dmsans-bold-black-13px">
              {horizonsPublics}
            </div>
            <div className="text-7-1 dmsans-bold-black-18px">{text71}</div>
            <p className="text-7-2 dmsans-medium-purple-mountains-majesty-13px">
              {text72}
            </p>
          </div>
          <Frame47
            image11={frame472Props.image11}
            libration={frame472Props.libration}
            surname={frame472Props.surname}
            parNicolasMassol={frame472Props.parNicolasMassol}
            text69={frame472Props.text69}
            className={frame472Props.className}
          />
        </div>
        <div className="flex-row-37">
          <Frame47
            image11={frame473Props.image11}
            libration={frame473Props.libration}
            surname={frame473Props.surname}
            parNicolasMassol={frame473Props.parNicolasMassol}
            text69={frame473Props.text69}
          />
          <div className="frame-1">
            <img className="image-11" src={image112} />
            <div className="horizons-publics valign-text-middle dmsans-bold-black-13px">
              {horizonsPublics2}
            </div>
            <div className="text-7-1 dmsans-bold-black-18px">{text73}</div>
            <p className="text-7-2 dmsans-medium-purple-mountains-majesty-13px">
              {text74}
            </p>
          </div>
          <Frame47
            image11={frame474Props.image11}
            libration={frame474Props.libration}
            surname={frame474Props.surname}
            parNicolasMassol={frame474Props.parNicolasMassol}
            text69={frame474Props.text69}
            className={frame474Props.className}
          />
        </div>
      </div>
    </div>
  );
}

export default X30Actualits;
