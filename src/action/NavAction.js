export const CheckNavbar = boolean => {
  return {
    type: 'OPEN',
    payload: boolean
  };
};
export const CloseNav = boolean => {
  return {
    type: 'CLOSE',
    payload: boolean
  };
};
