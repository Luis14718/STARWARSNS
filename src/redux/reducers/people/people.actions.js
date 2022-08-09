import actionTypes from './actionTypes';

const peopleLoadStart = () => (
  { type: actionTypes.DATA_LOAD_START }
);

const peopleLoadSuccess = (people) => ({
  type: actionTypes.DATA_LOAD_SUCCESS,
  payload: people,
});

const peopleLoadError = (errorMessage) => ({
  type: actionTypes.DATA_LOAD_ERROR,
  payload: errorMessage,
});
export default {
  peopleLoadStart,
  peopleLoadSuccess,
  peopleLoadError,
};
