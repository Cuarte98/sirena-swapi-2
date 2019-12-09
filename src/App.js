import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import fetchActions from "./actions/fetch";
import TopBar from "./components/TopBar";
import SearchView from "./views/SearchView";
import DetailsView from "./views/DetailsView";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataSuccess: (id, data) => {
      dispatch(fetchActions.fetchDataSuccess(id, data));
    },
    fetchDataError: (id, error) => {
      dispatch(fetchActions.fetchDataError(id, error));
    },
    fetchData: (id) => {
      dispatch(fetchActions.fetchData(id));
    },
  };
};

const api = "https://swapi.co/api/";

const App = ({ fetchData, fetchDataSuccess, fetchDataError }) => {
  const fetchAPIData = (id) => {
    fetch(api + id)
      .then((response) => {
        fetchData(id);
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.json().statusText);
        }
      })
      .then(async (data) => {
        await fetchDataSuccess(id, data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        fetchDataError(id, error);
      });
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /* fetchAPIData("people");
    fetchAPIData("films"); */
  }, []);

  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        {!isLoading ? (
          <Route path="/" component={SearchView} exact />
        ) : (
          <CircularProgress />
        )}
        <Route path="/details/people/:id" component={DetailsView} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default connect(null, mapDispatchToProps)(App);
