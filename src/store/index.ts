import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = ({ initialState = {}}) => {
    return createStore(initialState, rootReducer, composeWithDevTools());
}