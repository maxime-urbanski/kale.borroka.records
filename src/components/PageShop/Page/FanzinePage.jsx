import React from "react";
import fanzine from "../Marchandise/Fanzine";
import Footer from "../../Footer/Footer";
import PageArticle from "../PageArticle";

const fanzinePage = () => {
  const format = "Fanzine";
  return (
    <div>
      <PageArticle articleList={fanzine} format={format} />
      <Footer />
    </div>
  );
};

export default fanzinePage;
