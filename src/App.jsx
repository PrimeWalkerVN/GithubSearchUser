import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Detail from "./components/Details/Detail";
import DashBoard from "./components/MainPage/DashBoard";
import NotFound from "./components/NotFound";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <div className="container max-w-full pb-10 px-10">
      <BrowserRouter history={history}>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/Login" component={Login} />
          <Route path="/Detail" component={Detail} />
          <Route path="/dashboard" component={DashBoard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
