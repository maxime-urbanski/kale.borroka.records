import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar";

import ban from "./img/ban.png";
import Home from "./home";
import LP from "./LpList";
import EpList from "./EpList";
import divers from "./Divers";
import VinyleDetails from "./VinyleDetails";

import "./menu.css";
import HowBuy from "./HowBuy";
import ContactUs from "./ContactUs";

function Router() {
    return (
        <BrowserRouter>
            <MenuNav />
            
            <div className="mt-5 cOlor">
                <img src={ban} alt="baniere" />
            </div>

            <Switch>
                <Route path="/LP/:id" component={VinyleDetails} />
                <Route path="/LP:page" component={LP} />
                <Route path="/EP:page" component={EpList} />
                <Route path="/EP/:id" component={VinyleDetails} />
                <Route exact path="/" component={Home} />
                <Route exact path="/crew" component={""} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/how-to-buy" component={HowBuy} />
                <Route path="/LP" component={LP} />
                <Route path="/EP" component={EpList} />
                <Route path="/Production" component={""} />
                <Route path="/Divers" component={divers} />
                <Route path="/Divers/fanzine" component={""} />
                <Route path="/Divers/IPEH" component={""} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
