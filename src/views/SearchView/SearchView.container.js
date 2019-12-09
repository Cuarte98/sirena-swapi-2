import SearchView from "./SearchView";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  /*   retrievedList: state.data.people.results || [], */
});

export default connect(mapStateToProps)(SearchView);
