import React from "react";
import cookie from "js-cookie";

function Favorite() {
  const str = cookie.get("favorite");
  const favors = JSON.parse(str);
  console.log(favors);
  return (
    <div>
      {favors.map(favor => {
        return (
          <div>
            <div>{favor.title}</div>
            <div>{favor.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Favorite;
