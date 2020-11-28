import React from "react";
import fanzine from "../Marchandise/Fanzine";
import PageArticle from "../PageArticle";

const fanzinePage = () => {
  const format = "Fanzine";
  return (
    <div>
      <PageArticle articleList={fanzine} format={format} />
    </div>
  );
};

export default fanzinePage;
