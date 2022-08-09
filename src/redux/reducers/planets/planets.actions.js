import actionTypes from './actionTypes';

const planetsLoadStart = () => (
  { type: actionTypes.PLANETS_LOAD_START }
);

const planetsLoadSuccess = (planets) => ({
  type: actionTypes.PLANETS_LOAD_SUCCESS,
  payload: planets,
});

const planetsLoadError = (errorMessage) => ({
  type: actionTypes.PLANETS_LOAD_ERROR,
  payload: errorMessage,
});
export default {
  planetsLoadStart,
  planetsLoadSuccess,
  planetsLoadError,
};
