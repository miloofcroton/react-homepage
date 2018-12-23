import { createStore } from 'redux';

import { rootReducer } from './resources';
import { composedEnhancers } from './middleware';

const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;
