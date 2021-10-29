import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FeedPage from './FeedPage'
import LoginPage from './LoginPage'
import PostDetailsPage from './PostDetailsPage'
import SignupPage from './SignupPage'


const Router = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage/>
        </Route>
        <Route exact path={"/signup"} >
          <SignupPage/>
        </Route>
        <Route exact path={"/feed"}>
          <FeedPage />
        </Route>
        <Route exact path={"/post/:postId"}>
          <PostDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
