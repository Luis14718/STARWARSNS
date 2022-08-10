import DataService from '../../../services/data.service';
import actions from './films.actions';

export const loadFilmsAsync = (params) => (dispatch) => {
  dispatch(actions.filmsLoadStart());
  if (params) {
    DataService.getAllDatas(`films/${params}`)
      .then((response) => {
        dispatch(actions.filmsLoadSuccess(response.data));
      })
      .catch((error) => dispatch(actions.filmsLoadError(error.message)));
  }
};

export default loadFilmsAsync();
