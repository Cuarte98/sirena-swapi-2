import React, { useState, useEffect } from "react";
import List from "../../components/List";
import isEmpty from "lodash/isEmpty";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

const api = "https://swapi.co/api/";

const SearchView = ({ retrievedList, type = "people" }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const fetchData = () => {
    fetch(api + type + "/?search=" + input)
      .then((response) => response.json())
      .then(async (response) => {
        await setData(response);
        showedItems(response);
      });
  };

  const showedItems = (data) => {
    if (!isEmpty(data)) setItemsList(data.results);

    return itemsList;
  };
  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        value={input}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        fullWidth
      />
      {!isEmpty(data) ? (
        <List renderedList={itemsList} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default SearchView;
