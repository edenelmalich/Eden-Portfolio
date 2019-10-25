const initialState = {
  CheckNav: false
};
const NavReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case 'OPEN':
      return { ...state, CheckNav: !payload };
    default:
      return state;
  }
};
export default NavReducer;
