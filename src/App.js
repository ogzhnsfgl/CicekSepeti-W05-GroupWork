import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import ItemDetailPage from "./pages/ItemDetail/ItemDetailPage";
// import Header from "./components/Header";

export default function App() {
  return (
    <>
      {/* <Header /> */}

      <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/itemDetailPage/:id">
            <ItemDetailPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
