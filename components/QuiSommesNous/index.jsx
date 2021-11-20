import React from "react";
import Team1 from "../Team1";

function QuiSommesNous(props) {
  const { team1Props, team12Props, team13Props, team14Props, team15Props } =
    props;

  return (
    <div className="content-2">
      <div className="qui-sommes-nous-16 valign-text-middle dmserifdisplay-normal-tolopea-72px">
        Qui
        <br />
        sommes-nous ?
      </div>
      <div className="text-38 dmsans-medium-white-18px">
        <span className="dmsans-medium-tolopea-18px">
          Mieux Voter est une association créée en janvier 2018 pour promouvoir
          une nouvelle méthode de vote, le Jugement majoritaire. <br />
          <br />
          Mieux Voter agit pour faire connaître le Jugement Majoritaire au plus
          grand nombre et accompagne les collectivités publiques, les
          entreprises, les associations et les particuliers dans son
          utilisation.
        </span>
      </div>
      <div className="flex-row-28">
        <div className="flex-col-16">
          <Team1
            photo={team1Props.photo}
            name={team1Props.name}
            text51={team1Props.text51}
          />
          <Team1
            photo={team12Props.photo}
            name={team12Props.name}
            text51={team12Props.text51}
            className={team12Props.className}
          />
        </div>
        <div className="flex-col-17">
          <Team1
            photo={team13Props.photo}
            name={team13Props.name}
            text51={team13Props.text51}
            className={team13Props.className}
          />
          <Team1
            photo={team14Props.photo}
            name={team14Props.name}
            text51={team14Props.text51}
            className={team14Props.className}
          />
        </div>
        <Team1
          photo={team15Props.photo}
          name={team15Props.name}
          text51={team15Props.text51}
          className={team15Props.className}
        />
      </div>
    </div>
  );
}

export default QuiSommesNous;
