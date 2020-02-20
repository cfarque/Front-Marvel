import React from "react";

function Result({ comics }) {
  return (
    <div>
      {comics.map((comic, index) => {
        const path = comic.thumbnail.path + "." + comic.thumbnail.extension;
        return (
          <div key={comic.id}>
            <img src={path} alt={comic.name} />
            <h5>{comic.name}</h5>
            <div>
              {comic.comics.items.map((item, i) => {
                return (
                  <ul key={i}>
                    <li>{item.name}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Result;
