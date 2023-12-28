const initialState = {
  authCode: null,
  authUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_CODE":
      return {
        ...state,
        authCode: action.payload,
      };
    case "SET_AUTH_USER":
      return {
        ...state,
        authUser: action.payload,
      };
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
