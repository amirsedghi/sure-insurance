import actionTypes from "../actions/_ActionTypes";

const defaultState = {};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SUBMIT_FORM_SUCCESS:
      return {
        ...payload
      };
    default:
      return state;
  }
};
