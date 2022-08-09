import DataService from '../../../services/data.service';
import actions from './people.actions';

export const loadDatasAsync = (page, personid, search) => (dispatch) => {
  dispatch(actions.peopleLoadStart());
  if (page) {
    DataService.getAllDatas(`people/?format=json&page=${page}`)
      .then((response) => dispatch(actions.peopleLoadSuccess(response.data)))
      .catch((error) => dispatch(actions.peopleLoadError(error.message)));
  } else if (personid) {
    DataService.getAllDatas(`people/${personid}/?format=json`)
      .then((response) => dispatch(actions.peopleLoadSuccess(response.data)))
      .catch((error) => dispatch(actions.peopleLoadError(error.message)));
  } else if (search) {
    DataService.getAllDatas(`people/?format=json&search=${search}`)
      .then((response) => dispatch(actions.peopleLoadSuccess(response.data)))
      .catch((error) => dispatch(actions.peopleLoadError(error.message)));
  }
};

export default loadDatasAsync();
