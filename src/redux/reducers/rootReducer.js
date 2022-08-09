import { combineReducers } from 'redux';
import peopleReducer from './people/people.reducer';
import planetsReducer from './planets/planets.reducer';

const rooteReducer = () => combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
});
export default rooteReducer;
