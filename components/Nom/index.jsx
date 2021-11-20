import React from "react";

function Nom(props) {
  const { name } = props;

  return (
    <div className="nom">
      <div className="name-2 valign-text-middle dmsans-bold-tolopea-11-5px">{name}</div>
      <p className="text-2-1 valign-text-middle dmsans-medium-tolopea-8-6px">Cliquez pour en savoir plus</p>
    </div>
  );
}

export default Nom;
