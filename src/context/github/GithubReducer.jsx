const ACTIONS = {
  GET_USERS: "GET_USERS",
  SET_LOADING: "SET_LOADING",
  CLEAR_USERS: "CLEAR_USERS",
  GET_USER: "GET_USER",
  GET_REPOS: "GET_REPOS",
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ACTIONS.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case ACTIONS.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default githubReducer;
