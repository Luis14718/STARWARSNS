import DataService from '../../../services/data.service';
import actions from './planets.actions';

export const loadPlanetsAsync = (page, planetid, search) => (dispatch) => {
  dispatch(actions.planetsLoadStart());
  if (page) {
    DataService.getAllDatas(`planets/?format=json&page=${page}`)
      .then((response) => dispatch(actions.planetsLoadSuccess(response.data)))
      .catch((error) => dispatch(actions.planetsLoadError(error.message)));
  } else if (planetid) {
    DataService.getAllDatas(`planets/${planetid}/?format=json`)
      .then((response) => dispatch(actions.planetsLoadSuccess(response.data)))
      .catch((error) => dispatch(actions.planetsLoadError(error.message)));
  } else if (search) {
    DataService.getAllDatas(`planets/?format=json&search=${search}`)
      .then((response) => dispatch(actions.planetsLoadSuccess(response.data)))
      .catch((error) => dispatch(actions.planetsLoadError(error.message)));
  }
};

export default loadPlanetsAsync();
