const initialState = {};
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return state;
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        currentView: "characters",
        data: { ...state.data, [action.id]: action.payload },
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default fetchReducer;
