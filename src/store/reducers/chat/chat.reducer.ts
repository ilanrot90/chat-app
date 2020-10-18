import { CLOSE_CONVERSATION, OPEN_CONVERSATION, CHANGE_CURRENT_USER } from 'store/actions';
import { Group, ActiveGroup, User } from 'store/types';

export interface IChat {
  currentUser: User;
  activeGroup: Group | null;
  groups: Group[];
}
const initialState: IChat = {
  currentUser: {
    name: 'Ilan Roitlender',
    img: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
    id: 'id0',
  },
  activeGroup: null,
  groups: [
    {
      name: 'new team',
      img:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
      users: [
        {
          name: 'Ilan Roitlender',
          img: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
          id: 'id0',
        },
        { name: 'User1', img: 'https://byuc.files.wordpress.com/2012/07/avat-2.jpg', id: 'id1' },
      ],
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
      id: 'group1',
    },
  ],
};

type Action =
  | {
      type: 'OPEN_CONVERSATION';
      id: string;
    }
  | {
      type: 'CHANGE_CURRENT_USER';
      payload: { nextUser: User; nextActiveGroup: ActiveGroup };
    }
  | {
      type: 'CLOSE_CONVERSATION';
    };

const chatReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case OPEN_CONVERSATION:
      return { ...state, activeGroup: state.groups.find((group) => group.id === action.id) };
    case CLOSE_CONVERSATION:
      return { ...state, activeGroup: null };
    case CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.nextUser,
        activeGroup: action.payload.nextActiveGroup,
      };
    default:
      return state;
  }
};

export default chatReducer;
