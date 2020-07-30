const INITIAL_STATE = {
    isLoggedIn: false,
    loadingState: 'init',
    firstName: '',
    lastName: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'USER_SET_IS_LOGGED_IN':
        return {
            ...state,
            isLoggedIn: action.isLoggedIn,
        };
    default:
        return state;
    }
};
export default userReducer;