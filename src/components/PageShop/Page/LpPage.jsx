import React from "react";
import LParticle from "../Marchandise/Lp";
import Footer from "../../Footer/Footer";
import PageArticle from "../PageArticle";

const lpPage = () => {
  const format = "LP";
  return (
    <div>
      <PageArticle articleList={LParticle} format={format} />
      <Footer />
    </div>
  );
};

export default lpPage;
