import React from "react";
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Project from './pages/Project';
export default function MainRoutes() {
  return (
    <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/projeto/:id">
            <Project />
          </Route>
  </Switch>
  )
}