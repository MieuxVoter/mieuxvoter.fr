import React from "react";
import Property1big from "../Property1big";
import Nom from "../Nom";
import Property1off from "../Property1off";
import Property1on from "../Property1on";

function VoteDesk2(props) {
  const {
    nomProps,
    property1offProps,
    property1off2Props,
    property1off3Props,
    property1onProps,
    property1off4Props,
    property1off5Props,
  } = props;

  return (
    <div className="cand-2">
      <Property1big />
      <Nom name={nomProps.name} />
      <div className="mentions-1">
        <Property1off>{property1offProps.children}</Property1off>
        <Property1off className={property1off2Props.className}>{property1off2Props.children}</Property1off>
        <Property1off className={property1off3Props.className}>{property1off3Props.children}</Property1off>
        <Property1on trsBien={property1onProps.trsBien} className={property1onProps.className} />
        <Property1off className={property1off4Props.className}>{property1off4Props.children}</Property1off>
        <Property1off className={property1off5Props.className}>{property1off5Props.children}</Property1off>
      </div>
    </div>
  );
}

export default VoteDesk2;