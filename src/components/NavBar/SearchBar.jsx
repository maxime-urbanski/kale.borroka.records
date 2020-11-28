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
  const focus = () => setSearch(true);
  const blur = () => {
    articleSuggestions.length === 0 || choice === false
      ? setSearch(false)
      : setSearch(true);
  };
  const handleClick = () => {
    setChoice(true);
    setSearch(false);
  };

  return (
    <div className={styles.autoCompleteText}>
      <input
        type="text"
        value={articleSuggestions}
        onChange={handleChange}
        onFocus={focus}
        onBlur={blur}
      />

      {search && (
        <ul onClick={handleClick}>
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
