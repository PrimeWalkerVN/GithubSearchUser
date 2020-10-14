import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Detail from "./components/Details/Detail";
import DashBoard from "./components/MainPage/DashBoard";
import NotFound from "./components/NotFound";
import { createBrowserHistory } from "history";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Loading from "./components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import Noti from "./components/Noti";
const history = createBrowserHistory();

function App() {
  const { isLoading, error } = useAuth0();
  if (error) Noti("error", "Error", error.message);

  return (
    <div className="container max-w-full lg:px-10">
      {isLoading ? < Loading /> :
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Redirect exact from="/" to="/dashboard" />
            <PrivateRoute path="/dashboard" component={DashBoard} />
            <PrivateRoute path="/detail" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </Router>}
    </div>
  );
}

export default App;
