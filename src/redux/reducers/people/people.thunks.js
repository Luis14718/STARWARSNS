import DataService from '../../../services/data.service';
import actions from './people.actions';

export const loadDatasAsync = (page, personid, search) => (dispatch) => {
  dispatch(actions.peopleLoadStart());
  if (page) {
    DataService.getAllDatas(`people/?format=json&page=${page}`)
      .then((response) => {
        // eslint-disable-next-line no-unused-vars
        const datacomplete = response.data;
        response.data.results.forEach((element) => {
          const elements = element;
          const idplanet = element.homeworld.split('/');
          DataService.getAllDatas(`planets/${idplanet[idplanet.length - 2]}/?format=json`)
            .then((planet) => {
              elements.homeworld = planet.data;
              dispatch(actions.peopleLoadSuccess(datacomplete));
            });
        });
      })
      .catch((error) => dispatch(actions.peopleLoadError(error.message)));
  } else if (personid) {
    DataService.getAllDatas(`people/${personid}/?format=json`)
      .then((response) => dispatch(actions.peopleLoadSuccess(response.data)))
      .catch((error) => dispatch(actions.peopleLoadError(error.message)));
  } else if (search) {
    DataService.getAllDatas(`people/?format=json&search=${search}`)
      .then((response) => {
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
