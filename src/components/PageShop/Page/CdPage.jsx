import React from "react";
import Footer from "../../Footer/Footer";
import PageArticle from "../PageArticle";
import cd from "../Marchandise/CD";

const cdPage = () => {
  const format = "CD";
  return (
    <div>
      <PageArticle articleList={cd} format={format} />
      <Footer />
    </div>
  );
};

export default cdPage;
