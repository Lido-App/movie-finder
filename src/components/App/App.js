import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";

import ActorDetails from "../ActorDetails/ActorDetails";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../elements/NotFound/NotFound";

// App.nav
// home, movieId

const App = () => {
  return (
    <BrowserRouter basename="/movie-finder/">
      <>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route
            path="/actor-details/:actorId"
            component={ActorDetails}
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
