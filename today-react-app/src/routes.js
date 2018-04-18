import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Updates from './components/Updates';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Updates} />
  </Route>
)
