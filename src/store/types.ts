import { IChat } from './reducers/chat/chat.reducer';

export interface IState {
  chat: IChat;
}

export type Massage = {
  userId: string;
  date: Date;
  text: string;
};
export type User = {
  name: string;
  img: string;
  id: string;
};
export type Group = {
  users: User[];
  history: Massage[];
  id: string;
  name: string;
  img: string;
};

export type ActiveGroup = Group;
