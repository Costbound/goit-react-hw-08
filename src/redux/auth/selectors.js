export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectUsername = (state) => {
  const name = state.auth.user.name;
  return name.slice(0, name.indexOf(" ")) ?? name;
};
