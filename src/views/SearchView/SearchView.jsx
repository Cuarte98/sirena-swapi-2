import React from "react";
// import Topbar from "../components/Topbar";
import List from "../../components/List";
/* import Search from "../components/Search"; */

const SearchView = ({ retrievedList }) => {
  return (
    <div>
      <List data={retrievedList} />
    </div>
  );
};

export default SearchView;
