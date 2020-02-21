import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const nbResultByPage = 100;

function SearchBar({
  search,
  setSearch,
  checkBoxComics,
  setCheckBoxComics,
  checkBoxCharacter,
  setCheckBoxCharacter,
  setData,
  setIsLoading
}) {
  const [nbPages, setNbPages] = useState(0);
  const { page = "1" } = useParams();
  const offset = (page - 1) * nbResultByPage;
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const fetchDataComics = async () => {
          const response = await axios.get(
            `https://back-marvel.herokuapp.com/comics?title=${search}`
          );
          setData(response.data.data.results);
          setNbPages(Math.round(response.data.data.total / nbResultByPage));
          setIsLoading(false);
          setSearch("");
        };
        const fetchDataCharacter = async () => {
          const response = await axios.get(
            `https://back-marvel.herokuapp.com//characters?name=${search}`
          );
          setData(response.data.data.results);
          setNbPages(Math.round(response.data.data.total / nbResultByPage));
          setIsLoading(false);
          setSearch("");
        };
        const research = () => {
          if (checkBoxComics === true) {
            fetchDataComics();
          }
          if (checkBoxCharacter === true) {
            fetchDataCharacter();
          }
        };
        const pages = nbPages
          ? new Array(nbPages).fill(null).map((p, i) => `${i + 1}`)
          : [];
        console.log("1", search);
        if (search) {
          research();
        } else {
          setData("");
        }
      }}
    >
      <div>
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Que recherchez-vous?"
          value={search}
          onChange={event => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div>
        <span>
          <input
            type="checkbox"
            onClick={() => {
              const check = !checkBoxComics;
              setCheckBoxComics(check);
            }}
          />
          <label>Comics</label>
        </span>
        <span>
          <input
            type="checkbox"
            onClick={() => {
              const check = !checkBoxCharacter;
              setCheckBoxCharacter(check);
            }}
          />
          <label>Character</label>
        </span>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
