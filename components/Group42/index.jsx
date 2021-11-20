import React from "react";

function Group42(props) {
  const { className } = props;

  return (
    <div className={`group-42 ${className || ""}`}>
      <img className="subtract-4" src="/img/subtract-88@1x.svg" />
    </div>
  );
}

export default Group42;
