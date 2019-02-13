import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
