import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";

import RatingInformation from "./components/ratingInformation";
import QuoteOverview from "./components/quoteOverview";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/quote-overview">
          <QuoteOverview />
        </Route>
        <Route path="/">
          <RatingInformation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
