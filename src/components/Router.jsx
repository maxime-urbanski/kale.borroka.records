import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Row } from "reactstrap";
import MenuNav from "./NavBar/NavBar";
import TopNav from "./NavBar/TopNav";
import Home from "./PageShop/Page/Home/Home";
import Work from "./PageShop/Page/Home/Work";
import divers from "./PageShop/Page/Divers";
import fanzinePage from "./PageShop/Page/FanzinePage";
import lpPage from "./PageShop/Page/LpPage";
import epPage from "./PageShop/Page/EpPage";
import cdPage from "./PageShop/Page/CdPage";
import HowBuy from "./Footer/HowBuy";
import ContactUs from "./Footer/ContactUs";
import ban from "./Img/ban.png";
import styles from "./Styles/home.module.css";
import ArticleDetail from "./PageShop/ArticleDetail";
import ProductionPage from "./PageShop/Page/ProductionPage";

function Router() {
  return (
    <BrowserRouter>
      <Row>
        <TopNav />
      </Row>
      <Row>
        <MenuNav />
      </Row>
      <div className={styles.ban}>
        <img className={styles.img} src={ban} alt="kale borroka records ban" />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:format/:id" component={ArticleDetail} />
        <Route path="/fanzine" component={fanzinePage} />
        <Route path="/ipeh" component={Work} />
        <Route path="/cd" component={cdPage} />
        <Route path="/ep" component={epPage} />
        <Route path="/lp" component={lpPage} />
        <Route path="/production" component={ProductionPage} />
        <Route exact path="/crew" component={Work} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/how-to-buy" component={HowBuy} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
