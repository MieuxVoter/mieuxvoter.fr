import React from "react";

function SizebigColorbleu(props) {
  const { className } = props;

  return (
    <div className={`logo ${className || ""}`}>
      <div className="overlap-group-1">
        <img className="union-1" src="/img/union-25@2x.svg" />
        <img className="subtract-2" src="/img/subtract-83@2x.svg" />
        <img className="subtract-3" src="/img/subtract-84@2x.svg" />
      </div>
      <img className="mieux-voter" src="/img/mieux-voter-13@2x.svg" />
    </div>
  );
}

export default SizebigColorbleu;
