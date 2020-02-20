import React from "react";

function Line({ data, isLoading }) {
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <div>Chargement en cours</div>
      ) : (
        data.map((file, index) => {
          const path = file.thumbnail.path + "." + file.thumbnail.extension;
          return (
            <div>
              <h5>{file.name}</h5>
              <img src={path} alt={file.name} />
              <div>{file.description}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Line;
