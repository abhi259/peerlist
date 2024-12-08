export const validateAllForms = ({ state, setState }) => {
  let validate = true;

  state.map((item, index) => {
    if (!item?.title.length > 0) {
      const tempState = state;
      tempState[index].error = true;
      setState(tempState);
      validate = false;
    }
  });

  return validate;
};
