import actionTypes from './actionTypes';
import initialStates from './initialStates';

// eslint-disable-next-line default-param-last
const planetsReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case actionTypes.PLANETS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        planets: null,
        errorMessage: null,
      };

    case actionTypes.PLANETS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        planets: payload,
      };
    case actionTypes.PLANETS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
export default planetsReducer;
