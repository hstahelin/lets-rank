import React, { useState } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";
import ShowDetail from "./ShowDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MyLists from "./MyListsComponent";
import ListDetail from "./ListDetailComponent";
import About from "./AboutComponent";
import Recommendation from "./RecommendationsComponent";
import Searchresults from "./SearchResultsComponent";
import history from "../history";
import UserInfo from "./UserInfoComponent";
import Login from "./LoginComponent";
import Included from "./IncludedComponent";
import RankList from "./RankListComponent";

function ShowDetailWithId({ match }) {
  return <ShowDetail showId={+match.params.showId} />;
}

function MyListsUser({ match }) {
  return <MyLists userId={match.params.userId} />;
}

function MyListsUserList({ match }) {
  return <MyLists userId={match.params.userId} listId={match.params.listId} />;
}

function ListWithId({ match }) {
  return <ListDetail listId={match.params.listId} />;
}

function RecommendationWithId({ match }) {
  return <Recommendation listId={match.params.listId} />;
}

function UserWithId({ match }) {
  return <UserInfo userId={match.params.userId} />;
}

function Main() {
  const [searchText, setSearchText] = useState("");
  let searchBoxText = "";

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit(event) {
    history.push("/search");
    event.preventDefault();
  }

  function SearchresultsWithQ() {
    searchBoxText = searchText;
    return <Searchresults searchText={searchBoxText} />;
  }

  function IncludedWithId({ match }) {
    return <Included showId={match.params.showId} />;
  }

  function RankListWithId({ match }) {
    return <RankList listId={match.params.listId} />;
  }

  return (
    <div>
      <Router history={history}>
        <Header
          onSubmit={handleSubmit}
          onChange={handleChange}
          searchText={searchText}
        />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/show/:showId" component={ShowDetailWithId} />
          <Route path="/myLists/:userId/:listId" component={MyListsUserList} />
          <Route path="/myLists/:userId" component={MyListsUser} />
          <Route path="/list/:listId" component={ListWithId} />
          <Route path="/about" component={About} />
          <Route path="/search" component={SearchresultsWithQ} />
          <Route
            path="/recommendations/:listId"
            component={RecommendationWithId}
          />
          <Route path="/user/:userId" component={UserWithId} />
          <Route path="/login" component={Login} />
          <Route path="/included/:showId" component={IncludedWithId} />
          <Route path="/rank/:listId" component={RankListWithId} />
          <Route path="/" component={Home} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
