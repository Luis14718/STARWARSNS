import DataService from '../../../services/data.service';
import actions from './people.actions';

export const loadDatasAsync = (params) => (dispatch) => {
  dispatch(actions.peopleLoadStart());
  if (params) {
    DataService.getAllDatas(`people/${params}`)
      .then((response) => {
        // eslint-disable-next-line no-unused-vars
        const datacomplete = response.data;
        if (response.data.count !== 0) {
          response.data.results.forEach((element) => {
            const elements = element;
            const idplanet = element.homeworld.split('/');
            DataService.getAllDatas(`planets/${idplanet[idplanet.length - 2]}/?format=json`)
              .then((planet) => {
                elements.homeworld = planet.data;
                dispatch(actions.peopleLoadSuccess(datacomplete));
              });
          });
        } else {
          dispatch(actions.peopleLoadSuccess(datacomplete));
        }
      })
      .catch((error) => dispatch(actions.peopleLoadError(error.message)));
  }
};

export default loadDatasAsync();
