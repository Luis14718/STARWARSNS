import actionTypes from '../actionTypes';
import initialStates from '../initialStates';

// eslint-disable-next-line default-param-last
const peopleReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case actionTypes.DATA_LOAD_START:
      return {
        ...state,
        isLoading: true,
        people: null,
        errorMessage: null,
      };

    case actionTypes.DATA_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        people: payload,
      };
    case actionTypes.DATA_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
export default peopleReducer;
