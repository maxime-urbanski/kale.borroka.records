import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar";

import ban from "./img/ban.png";
import Home from "./home";
import LP from "./LpList";
import EpList from "./EpList";
import divers from "./Divers";

function Router() {
    return (
        <BrowserRouter>
            <MenuNav />
            <img className="mt-5" src={ban} alt="baniere" />
            <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/LP" component={LP} />
                <Route path="/LP/:lpId" component={""} />
                <Route path="/EP" component={EpList} />
                <Route path="/EP/:epId" component={""} />
                <Route path="/Production" component={""} />
                <Route path="/Divers" component={divers} />
                <Route path="/Divers/fanzine" component={""} />
                <Route path="/Divers/IPEH" component={""} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
