import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import promise from "redux-promise";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
        <Route component={() => <div>Oops,page not found!</div>} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
