import React, { useState, useRef } from "react";
import cd from "../PageShop/Marchandise/CD";
import epArticle from "../PageShop/Marchandise/EP";
import LParticle from "../PageShop/Marchandise/Lp";
import fanzine from "../PageShop/Marchandise/Fanzine";
import ResultSearch from "./ResultSearch";
import styles from "../Styles/navbar.module.css";

let allArticles = [];
allArticles = allArticles
  .concat(cd)
  .concat(LParticle)
  .concat(epArticle)
  .concat(fanzine);
const SearchBar = () => {
  const [articleSuggestions, setArticleSuggestions] = useState("");
  const [search, setSearch] = useState(false);
  const [choice, setChoice] = useState(true);
  const handleChange = (event) => {
    setArticleSuggestions(event.target.value);
  };

  return (
    <div className={styles.autoCompleteText}>
      <input
        type="text"
        value={articleSuggestions}
        onChange={handleChange}
        onFocus={() => {
          setSearch(true);
        }}
        onBlur={() => {
          articleSuggestions.length === 0 || choice === false
            ? setSearch(false)
            : setSearch(true);
        }}
      />

      {search && (
        <ul
          onClick={() => {
            setChoice(true);
            setSearch(false);
          }}
        >
          <ResultSearch
            array={allArticles}
            articleSuggestions={articleSuggestions}
            setArticleSuggestions={setArticleSuggestions}
          />
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
