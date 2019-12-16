import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import TopBar from "./components/TopBar";
import SearchView from "./views/SearchView";
import DetailsView from "./views/DetailsView";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/" component={SearchView} exact />
        <Route path="/details/people/:id" component={DetailsView} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
