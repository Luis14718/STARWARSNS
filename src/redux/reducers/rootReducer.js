import { combineReducers } from 'redux';
import peopleReducer from './people/people.reducer';
import filmsReducer from './films/films.reducer';

const rooteReducer = () => combineReducers({
  people: peopleReducer,
  films: filmsReducer,
});
export default rooteReducer;
