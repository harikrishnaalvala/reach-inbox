

const initialState = {
  isLoggedIn: false,
  darkMode: true,
  mails: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action);
      return { ...state, isLoggedIn: action.payload };

    case "MAILS":
        console.log(action.payload);
      return { ...state, mails: action.payload };
    
    case "THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};


export default reducer;
