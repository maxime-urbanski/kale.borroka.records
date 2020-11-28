import React from "react";
import PageArticle from "../PageArticle";
import cd from "../Marchandise/CD";

const cdPage = () => {
  const format = "CD";
  return (
    <div>
      <PageArticle articleList={cd} format={format} />
    </div>
  );
};

export default cdPage;
