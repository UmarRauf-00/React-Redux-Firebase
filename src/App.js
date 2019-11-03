import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./componenets/layout/navbar"
import Dashboard from './componenets/dashboard/Dashboard'
import ProjectDetails from '../src/componenets/projects/ProjectDetails'
import SignIn from './componenets/auth/SignIn'
import SignUp from './componenets/auth/SignUp'
import CreateProject from './componenets/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/Project/:id' component={ProjectDetails} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/createproject' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
