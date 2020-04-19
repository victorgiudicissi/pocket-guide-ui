import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Routes from './routes';

import OutgoingListStore from './containers/OutgoingList/store'
import CreateOutgoStore from './containers/CreateOutgo/store'
import OutgoStore from './containers/Outgo/store'

const stores = {
  OutgoingListStore,
  CreateOutgoStore,
  OutgoStore
}

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);