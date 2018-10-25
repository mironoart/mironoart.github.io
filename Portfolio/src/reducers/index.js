import { combineReducers } from 'redux';

import todos from './projects';

const allReducers = combineReducers({
   projects:todos   //** Передаем в projects весь массив  из ./projects */
});

export default allReducers;
