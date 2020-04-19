import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";

import OutgoingList from "../containers/OutgoingList";
import Outgo from "../containers/Outgo";
import CreateOutgo from "../containers/CreateOutgo";
import OutgoError from "../components/Error";

export default class Routes extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={'/'} component={OutgoingList} />
          <Route exact path={`/show/:outgoId`} component={Outgo} />
          <Route exact path={'/create'} component={CreateOutgo} />
          <Route exact path={'/error'} component={OutgoError} />
        </Switch>
      </Router>
    );
  }
}
