import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { appRoutes } from './utils/routes'

// import { ContactRoute } from './gaurds'
// client
import { Home, Rsvp, Registry } from './screens/client'
import { NotFoundScreen } from './screens/common'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path={appRoutes.home} exact component={Home} />
        <Route path={appRoutes.rsvp.main} component={Rsvp} />
        <Route path={appRoutes.registry} exact component={Registry} />
        <Route path={'*'} component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}