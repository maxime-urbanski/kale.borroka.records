import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar";

import Home from "./Home/home";
import LP from "./PageShop/LpList";
import EpList from "./PageShop/EpList";

import divers from "./PageShop/Divers";
import VinyleDetails from "./PageShop/VinyleDetails";
import fanzineList from "./PageShop/fanzineList";
import "./menu.css";
import HowBuy from "./Footer/HowBuy";
import ContactUs from "./Footer/ContactUs";
import Crew from "./Footer/Crew";
import cdList from "./PageShop/cdList";
import ProductionList from "./PageShop/ProductionList";

function Router() {
    return (
        <BrowserRouter>
            <MenuNav />
            <div className="mt-5 ban"></div>
            <Switch>
                <Route path="/CD:page" component={cdList} />
                <Route path="/LP:page" component={LP} />
                <Route path="/EP:page" component={EpList} />
                <Route path="/LP/:id" component={VinyleDetails} />
                <Route path="/EP/:id" component={VinyleDetails} />
                <Route path="/CD/:id" component={VinyleDetails} />
                <Route path="/Divers/fanzine" component={fanzineList} />
                <Route path="/Production" component={ProductionList} />
                <Route exact path="/" component={Home} />
                <Route exact path="/crew" component={Crew} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/how-to-buy" component={HowBuy} />
                <Route path="/LP" component={LP} />
                <Route path="/CD" component={cdList} />
                <Route path="/EP" component={EpList} />
                <Route path="/Divers" component={divers} />
                <Route path="/Divers/IPEH" component={""} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
