import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Containers/Home/Home";
import Comics from "./Containers/Comics/Comics";
import Favorites from "./Containers/Favorites/Favorites";
import Characters from "./Containers/Characters/Characters";
import ComicsCharacters from "./Containers/ComicsCharacters";
import SearchBar from "./Components/SearchBar";
import Line from "./Components/Line";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [checkBoxCharacter, setCheckBoxCharacter] = useState(false);
  const [checkBoxComics, setCheckBoxComics] = useState(false);
  const [data, setData] = useState("");
  const [tabCookies, setTabCookies] = useState([]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <SearchBar
            setIsLoading={setIsLoading}
            setData={setData}
            checkBoxCharacter={checkBoxCharacter}
            setCheckBoxCharacter={setCheckBoxCharacter}
            checkBoxComics={checkBoxComics}
            setCheckBoxComics={setCheckBoxComics}
            search={search}
            setSearch={setSearch}
          />
          {data === "" ? (
            <Characters setTabCookies={setTabCookies} tabCookies={tabCookies} />
          ) : (
            <Line data={data} />
          )}
        </Route>
        <Route exact path="/characters/:page">
          <SearchBar
            setIsLoading={setIsLoading}
            checkBoxComics={checkBoxComics}
            setCheckBoxComics={setCheckBoxComics}
            checkBoxCharacter={checkBoxCharacter}
            setCheckBoxCharacter={setCheckBoxCharacter}
            search={search}
            setSearch={setSearch}
            setData={setData}
          />
          {data === "" ? (
            <Characters setTabCookies={setTabCookies} tabCookies={tabCookies} />
          ) : (
            <Line data={data} />
          )}
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/comics:id">
          <ComicsCharacters />
        </Route>
        <Route exact path="/comics">
          <SearchBar
            setIsLoading={setIsLoading}
            checkBoxComics={checkBoxComics}
            setCheckBoxComics={setCheckBoxComics}
            checkBoxCharacter={checkBoxCharacter}
            setCheckBoxCharacter={setCheckBoxCharacter}
            search={search}
            setSearch={setSearch}
            setData={setData}
          />
          {data === "" ? (
            <Comics setTabCookies={setTabCookies} tabCookies={tabCookies} />
          ) : (
            <Line data={data} />
          )}
        </Route>
        <Route exact path="/comics/:page">
          <SearchBar
            setIsLoading={setIsLoading}
            checkBoxComics={checkBoxComics}
            setCheckBoxComics={setCheckBoxComics}
            checkBoxCharacter={checkBoxCharacter}
            setCheckBoxCharacter={setCheckBoxCharacter}
            search={search}
            setSearch={setSearch}
            setData={setData}
          />
          {data === "" ? (
            <Comics setTabCookies={setTabCookies} tabCookies={tabCookies} />
          ) : (
            <Line data={data} />
          )}
        </Route>
        <Route exact path="/">
          <SearchBar
            setIsLoading={setIsLoading}
            checkBoxComics={checkBoxComics}
            setCheckBoxComics={setCheckBoxComics}
            checkBoxCharacter={checkBoxCharacter}
            setCheckBoxCharacter={setCheckBoxCharacter}
            search={search}
            setSearch={setSearch}
            setData={setData}
          />
          {data === "" ? <Home /> : <Line data={data} isLoading={isLoading} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
