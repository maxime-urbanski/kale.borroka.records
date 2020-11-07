import React from "react";
import Footer from "../../Footer/Footer";
import PageArticle from "../PageArticle";
import epArticle from "../Marchandise/EP";

const epPage = () => {
  const format = "EP";
  return (
    <div>
      <PageArticle articleList={epArticle} format={format} />
      <Footer />
    </div>
  );
};

export default epPage;
