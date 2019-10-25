const initialState = {
  CheckNav: false
};
const NavReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'OPEN':
      return { ...state, CheckNav: !payload };
    default:
      return state;
  }
};
export default NavReducer;
