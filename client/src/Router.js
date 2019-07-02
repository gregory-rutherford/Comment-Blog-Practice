import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Form from "./components/Form/index";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/signup" component={Form}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
 export default Router;