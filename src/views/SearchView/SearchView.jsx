import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import List from "../../components/List";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

const api = "https://swapi.co/api/";

class SearchView extends Component {
  state = {
    input: "",
    itemsList: [],
    hasMorePages: true,
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
          currentPage: this.state.currentPage,
        });
      });
  };

  render() {
    const { input, hasMorePages, itemsList } = this.state;

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
          onChange={this.handleChange}
          fullWidth
        />
        <InfiniteScroll
          threshold={50}
          loadMore={this.fetchData}
          hasMore={hasMorePages}
          loader={<CircularProgress />}
          useWindow={true}
        >
          <List renderedList={itemsList} />
        </InfiniteScroll>
      </div>
    );
  }
}

SearchView.defaultProps = {
  type: "people",
};

export default SearchView;
