import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar";

import Home from "./home";
import LP from "./LpList";
import EpList from "./EpList";
import cd from "./CD";
import divers from "./Divers";
import VinyleDetails from "./VinyleDetails";

import "./menu.css";
import HowBuy from "./HowBuy";
import ContactUs from "./ContactUs";
import Crew from "./Crew";
import cdList from "./cdList";

function Router() {
    return (
        <BrowserRouter>
            <MenuNav />            
            <div className="mt-5 ban">              
            </div>
            <Switch>
                <Route path="/CD:page" component={cdList} />
                <Route path="/LP:page" component={LP} />
                <Route path="/EP:page" component={EpList} />
                <Route path="/LP/:id" component={VinyleDetails} />
                <Route path="/EP/:id" component={VinyleDetails} />
                <Route path="/CD/:id" component={VinyleDetails} />
                <Route exact path="/" component={Home} />
                <Route exact path="/crew" component={Crew} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/how-to-buy" component={HowBuy} />
                <Route path="/LP" component={LP} />
                <Route path="/CD" component={cdList} />
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
