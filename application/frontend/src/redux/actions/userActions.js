
export const setPassword=password =>({
  type: 'USER_SET_PASSWORD',
  password,
});
export const setIsLoggedIn=isLoggedIn =>({
  type: 'USER_SET_IS_LOGGED_IN',
  isLoggedIn,
});

export const setEmail=email =>({
  type: 'USER_SET_EMAIL',
  email,
});
