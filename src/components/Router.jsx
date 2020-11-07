import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Row } from "reactstrap";
import MenuNav from "./NavBar/NavBar";
import TopNav from "./NavBar/TopNav";
import Home from "./Home/home";
import Work from "./Home/Work.jsx";
import divers from "./PageShop/Page/Divers";
import VinyleDetails from "./PageShop/VinyleDetails";
import fanzinePage from "./PageShop/Page/FanzinePage";
import ProductionList from "./PageShop/Page/ProductionPage";
import lpPage from "./PageShop/Page/LpPage";
import epPage from "./PageShop/Page/EpPage";
import cdPage from "./PageShop/Page/CdPage";
import HowBuy from "./Footer/HowBuy";
import ContactUs from "./Footer/ContactUs";
import Crew from "./Footer/Crew";
import ban from "./Img/ban.png";
import styles from "./Styles/home.module.css";

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
        <img src={ban} alt="kale borroka records ban" />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/LP/:id" component={VinyleDetails} />
        <Route exact path="/EP/:id" component={VinyleDetails} />
        <Route exact path="/CD/:id" component={VinyleDetails} />
        <Route path="/Divers/fanzine" component={fanzinePage} />
        <Route path="/Divers/IPEH" component={Work} />
        <Route path="/CD" component={cdPage} />
        <Route path="/Divers" component={divers} />
        <Route path="/EP" component={epPage} />
        <Route path="/LP" component={lpPage} />
        <Route path="/Production" component={ProductionList} />
        <Route exact path="/crew" component={Crew} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/how-to-buy" component={HowBuy} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
