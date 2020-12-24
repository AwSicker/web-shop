import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {MainPage} from "./components/MainPage";
import {ItemDetails} from "./components/ItemDetails";
import {Reviews} from "./components/Reviews";
import './styles/style.less'

export const App = () => {
  return (
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/item/:id" component={ItemDetails}/>
        <Route exact path="/reviews" component={Reviews}/>
    </Switch>
</BrowserRouter>
  );
}

