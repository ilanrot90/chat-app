type Massage = {
  userId: string;
  date: Date;
  text: string;
};

type User = {
  name: string;
  img: string;
  id: string;
};

type Group = {
  users: User[];
  history: Massage[];
};

export interface IChat {
  currentUser: User;
  groups: Group[];
}
const initialState: IChat = {
  currentUser: { name: 'Ilan', img: 'img', id: 'id0' },
  groups: [
    {
      users: [{ name: 'User1', img: 'img', id: 'id1' }],
      history: [
        {
          userId: 'id0',
          date: new Date(2020, 10, 17, 10, 33, 30, 0),
          text: 'Hi!',
        },
        {
          userId: 'id1',
          date: new Date(2020, 10, 17, 10, 35, 30, 0),
          text: 'How are you?',
        },
      ],
    },
  ],
};

type Action = {
  type: 'SET_LOADING_TRUE';
};

const chatReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chatReducer;
