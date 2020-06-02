import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar";

import ban from "./img/ban.png";
import Home from "./home";
import LP from "./LpList";

function Router() {
    return (
        <BrowserRouter>
            <MenuNav />
            <img className="mt-5" src={ban} alt="baniere" />
            <hr />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lp" component={LP} />
                <Route path="/lp/:lpId" component={""} />
                <Route path="/ep" component={""} />
                <Route path="/ep/:epId" component={""} />
                <Route path="/production" component={""} />
                <Route path="/divers" component={""} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
