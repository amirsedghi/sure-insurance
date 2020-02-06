import actionTypes from "../actions/_ActionTypes";

const defaultSate = {
  first_name: "",
  last_name: "",
  line_1: "",
  line_2: "",
  city: "",
  region: "",
  postal: "",
  error: ""
};

export default (state = defaultSate, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.EDIT_FORM:
      const { key, value } = payload;
      return {
        ...state,
        [key]: value
      };
    case actionTypes.SUBMIT_FORM_SUCCESS:
      return defaultSate;
    case actionTypes.SUBMIT_FORM_ERROR:
      return { ...state, error: payload.message };
    default:
      return state;
  }
};
