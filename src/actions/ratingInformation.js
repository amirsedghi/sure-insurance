import { formatForm, getPostRequest } from "../utility";
import actionTypes from "./_ActionTypes";

export const submitForm = (form, history) => async dispatch => {
  const response = await getPostRequest(
    "https://fed-challenge-api.sure.now.sh/api/v1/quotes",
    formatForm(form)
  );

  await response
    .json()
    .then(data => {
      dispatch({
        type: actionTypes.SUBMIT_FORM_SUCCESS,
        payload: data.quote.variable_options
      });
      history.push("/quote-overview");
    })
    .catch(error => {
      dispatch({ type: actionTypes.SUBMIT_FORM_ERROR, payload: error });
    });
};

export const editForm = (key, value) => dispatch => {
  dispatch({ type: actionTypes.EDIT_FORM, payload: { key, value } });
};
