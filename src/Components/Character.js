import React, { useState } from "react";
import "./Character.css";
import { useHistory } from "react-router-dom";
import cookie from "js-cookie";

function Character({ characters }) {
  const history = useHistory();

  return (
    <div className="character-page">
      {characters.map((character, index) => {
        const path =
          character.thumbnail.path + "." + character.thumbnail.extension;
        return (
          <div>
            <div
              className="character-all"
              onClick={() => {
                return history.push(`/comics${character.id}`, {
                  name: character.comics.name
                });
              }}
            >
              <div className="character-just-img">
                <img
                  className="character-img"
                  src={path}
                  alt={character.name}
                />
              </div>
              <div className="character-name-description">
                <h3>{character.name}</h3>
                <div className="character-description">
                  {character.description}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                const res = cookie.get("favorite");
                console.log(res);
                const str = JSON.stringify(character.name);
                console.log(str);
                cookie.set("favorite", str + res, { expires: 7 });
              }}
            >
              Add at favorite
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Character;
