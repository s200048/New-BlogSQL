import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/createpost" exact>
          <CreatePost />
        </Route>
      </Switch>
    </>
  );
};

export default App;
