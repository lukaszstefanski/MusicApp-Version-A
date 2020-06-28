import { combineReducers } from 'redux';

import tracksReducer from './reducers/tracks.reducer';

const rootReducer = combineReducers({
    tracksReducer,
});

export default rootReducer;
