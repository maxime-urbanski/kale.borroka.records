import React from "react";
import PageArticle from "../PageArticle";
import epArticle from "../Marchandise/EP";

const epPage = () => {
  const format = "EP";
  return (
    <div>
      <PageArticle articleList={epArticle} format={format} />
    </div>
  );
};

export default epPage;
