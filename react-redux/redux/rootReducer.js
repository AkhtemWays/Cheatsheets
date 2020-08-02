import { combineReducers } from 'redux';

import { postsReducer } from './postsReducer';
import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
// вот этот объект и есть state, который получает combine reducers
export const rootReducer = combineReducers({
	posts: postsReducer,
	app: appReducer
});
