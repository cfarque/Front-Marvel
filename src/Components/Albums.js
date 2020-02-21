import React from "react";
import "../Components/Comics/Albums.css";
import cookie from "js-cookie";

function Comic({ comics }) {
  return (
    <div className="comic-page">
      {comics.map((comic, index) => {
        const path = comic.thumbnail.path + "." + comic.thumbnail.extension;
        return (
          <div key={comic.id} className="comic-all">
            <div className="comic-just-img">
              <img className="comic-img" src={path} alt={comic.title} />
            </div>
            <div className="comic-name-description">
              <h3>{comic.title}</h3>
              <div className="comic-description">{comic.description}</div>
            </div>
            <button
              onClick={() => {
                const res = cookie.get("favorite");
                const str = JSON.stringify(comic.title);
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

export default Comic;
