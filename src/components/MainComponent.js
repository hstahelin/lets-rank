import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";
import ShowDetail from "./ShowDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MyLists from "./MyListsComponent";
import ListDetail from "./ListDetailComponent";
import About from "./AboutComponent";

function ShowDetailWithId({ match }) {
  return <ShowDetail showId={+match.params.showId} />;
}

function MyListsUser({ match }) {
  return <MyLists username={match.params.username} />;
}

function MyListsUserList({ match }) {
  return (
    <MyLists username={match.params.username} listId={match.params.listId} />
  );
}

function ListWithId({ match }) {
  return <ListDetail listId={match.params.listId} />;
}

function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/show/:showId" component={ShowDetailWithId} />
        <Route path="/myLists/:username/:listId" component={MyListsUserList} />
        <Route path="/myLists/:username" component={MyListsUser} />
        <Route path="/list/:listId" component={ListWithId} />
        <Route path="/about" component={About} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
