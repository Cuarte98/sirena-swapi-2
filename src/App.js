import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router";
import fetchActions from "./actions/fetch";
import SearchView from "./views/SearchView";

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

const App = ({ fetchData, fetchDataSuccess, fetchDataError }) => {
  const fetchAPIData = (id) => {
    fetch(`https://swapi.co/api/${id}`)
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAPIData("people");
    fetchAPIData("films");
  }, []);

  return (
    <div>{!isLoading ? <SearchView /> : <div> Select from menu </div>}</div>
  );
};

const RoutedApp = () => (
  <Router>
    <App />
  </Router>
);

export default connect(null, mapDispatchToProps)(RoutedApp);
