import React from "react";

function Group51(props) {
  const { rectangle81, spanText, spanText2, text4, className } = props;

  return (
    <div className={`group-51 ${className || ""}`}>
      <div className="overlap-group-6">
        <img className="rectangle-8" src={rectangle81} />
        <img className="line" src="/img/line-6@2x.svg" />
      </div>
      <div className="name-1 valign-text-middle dmsans-medium-tolopea-32px">
        <span>
          <span className="span-3 dmsans-medium-tolopea-32px">{spanText}</span>
          <span className="span-3 dmseriftext-normal-tolopea-32px">{spanText2}</span>
        </span>
      </div>
      <div className="text-4 valign-text-middle dmsans-normal-tolopea-18px">{text4}</div>
    </div>
  );
}

export default Group51;
