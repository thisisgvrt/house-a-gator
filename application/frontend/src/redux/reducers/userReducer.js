const INITIAL_STATE={
  password:'',
  isLoggedIn:false,
  loadingState:'init',
  email:'',
  };
  
  const userReducer =(state = INITIAL_STATE,action) =>{
      switch(action.type){
          
              case 'USER_SET_EMAIL':
              return{
                  ...state,
                  email: action.email,
              };
              case 'USER_SET_PASSWORD':
              return{
                  ...state,
                  password: action.password,
              };
              case 'USER_SET_IS_LOGGED_IN':
              return{
                  ...state,
                  isLoggedIn: action.isLoggedIn,
              };
            
          default:
              return state;
  
      }
  };
  export default userReducer;