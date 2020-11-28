import React from "react";
import LParticle from "../Marchandise/Lp";
import PageArticle from "../PageArticle";

const lpPage = () => {
  const format = "LP";
  return (
    <div>
      <PageArticle articleList={LParticle} format={format} />
    </div>
  );
};

export default lpPage;
