import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {MainPage} from "./components/MainPage";
import './app.css'
import {ItemDetails} from "./ItemDetails";

export const App = () => {
  return (
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/item/:id" component={ItemDetails}/>
    </Switch>
</BrowserRouter>
  );
}

