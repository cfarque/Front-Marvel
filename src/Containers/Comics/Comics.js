import React, { useState, useEffect } from "react";
import "./Comics.css";
import axios from "axios";
import Albums from "../Components/Comics/Albums.js";
import { useParams, Link } from "react-router-dom";

const nbResultByPage = 100;

function Comics() {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [nbPages, setNbPages] = useState(0);
  const { page = "1" } = useParams();

  const fetchData = async () => {
    console.log("page", page);
    const offset = (page - 1) * nbResultByPage;
    const response = await axios.get(
      `https://back-marvel.herokuapp.com/comics?limit=${nbResultByPage}&offset=${offset}`
    );
    setComics(response.data.data.results);
    setNbPages(Math.round(response.data.data.total / nbResultByPage));
    setIsLoading(false);
  };

  const pages = nbPages
    ? new Array(nbPages).fill(null).map((p, i) => `${i + 1}`)
    : [];

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="comics">
      {isLoading ? (
        <div>En cours de chargement</div>
      ) : (
        <div>
          <div>
            {pages.map((p, index) => {
              return <Link to={`/comics/${p}`}>{p}</Link>;
            })}
          </div>
          <Albums comics={comics} />
        </div>
      )}
    </div>
  );
}

export default Comics;
