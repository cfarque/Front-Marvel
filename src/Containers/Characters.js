import React, { useEffect, useState } from "react";
import Character from "../Components/Character";
import "./Characters.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const nbResultByPage = 100;

function Characters(setTabCookies, tabCookies) {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [nbPages, setNbPages] = useState(0);
  const { page } = useParams();

  const pages = nbPages
    ? new Array(nbPages).fill(null).map((p, i) => `${i + 1}`)
    : [];

  useEffect(() => {
    const fetchData = async () => {
      console.log("page", page);
      const offset = (page - 1) * nbResultByPage;

      const response = await axios.get(
        `https://back-marvel.herokuapp.com/characters?limit=${nbResultByPage}&offset=${offset}`
      );
      setCharacters(response.data.data.results);
      setNbPages(Math.round(response.data.data.total / nbResultByPage));
      setIsLoading(false);
    };
    fetchData();
  });

  return (
    <div className="characters">
      {isLoading ? (
        <div>En cours de chargement</div>
      ) : (
        <Character
          characters={characters}
          setTabCookies={setTabCookies}
          tabCookies={tabCookies}
        />
      )}
      <div>
        {pages.map((p, index) => {
          return <Link to={`/characters/${p}`}>{p}</Link>;
        })}
      </div>
    </div>
  );
}

export default Characters;
