const initalValue = {
  searchText: "",
  status: "All",
  priorities: [],
};
function FilterReducer(state = initalValue, action) {
  switch (action.type) {
    case "filter/addSearchText":
      return {
        ...state,
        searchText: action.payload,
      };
    case "filter/addStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "filter/addPriorities":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
}

export default FilterReducer;
