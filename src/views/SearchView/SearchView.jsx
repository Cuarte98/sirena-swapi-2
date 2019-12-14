import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroller";
import List from "../../components/List";
import isEmpty from "lodash/isEmpty";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

const api = "https://swapi.co/api/";

class SearchView extends React.Component {
  state = {
    input: "",
    itemsList: [],
    hasMorePages: true,
    currentPage: 1,
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.setState({ itemsList: [], currentPage: 1 });
    }
  }

  fetchData = (page) => {
    fetch(
      api + this.props.type + "/?search=" + this.state.input + "&page=" + page
    )
      .then((response) => response.json())
      .then(async (response) => {
        if (response.next == null) {
          this.setState({ hasMorePages: false });
        }
        this.setState({
          itemsList: [...this.state.itemsList, ...response.results],
        });
      });
  };

  render() {
    return (
      <div>
        <TextField
          id="input-with-icon-textfield"
          label="Search"
          value={this.state.input}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={this.handleChange}
          fullWidth
        />
        <InfiniteScroll
          pageStart={this.state.currentPage}
          threshold={50}
          loadMore={this.fetchData}
          hasMore={this.state.hasMorePages}
          loader={<CircularProgress />}
          useWindow={true}
        >
          <List renderedList={this.state.itemsList} />
        </InfiniteScroll>
      </div>
    );
  }
}

SearchView.defaultProps = {
  type: "people",
};

/* const SearchView = ({ type = "people" }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(true);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const showedItems = () => {
    setItemsList(data);
    return itemsList;
  };

  const fetchData = (page) => {
    fetch(api + type + "/?search=" + input + "&page=" + page)
      .then((response) => response.json())
      .then(async (response) => {
        if (response.next == null) {
          setHasMorePages(false);
        }
        setData([...data, ...response.results]);
        showedItems();
      });
  };

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
      <InfiniteScroll
        pageStart={1}
        loadMore={fetchData}
        hasMore={hasMorePages}
        loader={<CircularProgress />}
        useWindow={true}
      >
        <List renderedList={itemsList} />
      </InfiniteScroll>
    </div>
  );
};
 */
export default SearchView;
