/* eslint-disable no-console */

// store
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { middleware } from './middleware';

// reducers
import { reducer as projectsReducer, initialState as projectsInitial } from './resources/projects/reducers';

// create combined reducer

const initialState = {
  projects: projectsInitial,
};

const rootReducer = combineReducers({
  projects: projectsReducer
});


const enhancers = [
  applyMiddleware(...middleware)
];

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if(process.env.NODE_ENV === 'development' && typeof reduxDevToolsExtension === 'function') {
  enhancers.push(reduxDevToolsExtension());
}

const composedEnhancers = compose(
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
