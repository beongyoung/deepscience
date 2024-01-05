export const setAuthCode = (code) => {
  localStorage.setItem("authCode", code);
  return {
    type: "SET_AUTH_CODE",
    payload: code,
  };
};

export const setAuthUser = (user) => {
  localStorage.setItem("authUser", JSON.stringify(user));
  return {
    type: "SET_AUTH_USER",
    payload: user,
  };
};

export const setLoginStatus = (isLoggedIn) => ({
  type: "SET_LOGIN_STATUS",
  payload: isLoggedIn,
});

export const logoutUser = () => ({
  localStorage: localStorage.clear(),
  type: "LOGOUT_USER",
});
