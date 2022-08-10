import actionTypes from './actionTypes';

const filmsLoadStart = () => (
  { type: actionTypes.FILMS_LOAD_START }
);

const filmsLoadSuccess = (films) => ({
  type: actionTypes.FILMS_LOAD_SUCCESS,
  payload: films,
});

const filmsLoadError = (errorMessage) => ({
  type: actionTypes.FILMS_LOAD_ERROR,
  payload: errorMessage,
});
export default {
  filmsLoadStart,
  filmsLoadSuccess,
  filmsLoadError,
};
