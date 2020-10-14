import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading';
import { GithubProvider } from './context/context';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />} >
      <Auth0Provider
        domain="primewalker.us.auth0.com"
        clientId="CY4Up6NNvKwBUgNIVHvV2gg0R37jhuKF"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
        <GithubProvider>
          <App />
        </GithubProvider>
      </Auth0Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
