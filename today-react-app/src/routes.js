import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Updates from './containers/Updates';
import Update from './containers/Update';
import Tags from './containers/Tags';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Updates} />
     <Route path="/tags" component={Tags} />
     <Route path="/:id" component={Update} />
  </Route>
)
