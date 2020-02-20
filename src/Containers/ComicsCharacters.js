import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Result from "../Components/Result";
function ComicsCharacters({ name }) {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const fetchData = async () => {
    const response = await axios.get(
      "https://back-marvel.herokuapp.com/comics" + params.id
    );
    setComics(response.data);
    console.log(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="comics-characters-page">
      {isLoading ? (
        <div>En cours de chargement</div>
      ) : (
        <Result comics={comics} />
      )}
    </div>
  );
}
export default ComicsCharacters;
