import actionTypes from './actionTypes';
import initialStates from './initialStates';

// eslint-disable-next-line default-param-last
const filmsReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case actionTypes.FILMS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        films: null,
        errorMessage: null,
      };

    case actionTypes.FILMS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: payload,
      };
    case actionTypes.FILMS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
export default filmsReducer;
