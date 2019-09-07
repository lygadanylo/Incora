import React, { Component } from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import "./style/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { USERS_TABLE, USER_POSTS, POST_DETAIL_INFO } from "./common/common";

class App extends Component {
  render() {
    return (
      <Router basename={USERS_TABLE}>
        <Switch>
          <Route exact path={USERS_TABLE} component={Users}></Route>
          <Route exact path={USER_POSTS} component={Posts}></Route>
          <Route exact path={POST_DETAIL_INFO} component={Comments}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
