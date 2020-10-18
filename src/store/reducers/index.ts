import { combineReducers, Reducer } from 'redux';
import chatReducer, { IChat } from './chat/chat.reducer';

export interface IRootReducer {
  chat: Reducer<IChat>;
}

const rootReducer = combineReducers({ chat: chatReducer } as IRootReducer);

export default rootReducer;
