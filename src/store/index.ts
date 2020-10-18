import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { isProduction } from 'utils/helpers';

export const configureStore = ({ initialState = {} }) => {
  const store = createStore(rootReducer, initialState, composeWithDevTools());
  if (!isProduction) {
    // for easy debugging
    // @ts-ignore
    window.store = store;
  }
  return store;
};
