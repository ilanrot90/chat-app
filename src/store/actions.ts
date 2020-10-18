import { User, ActiveGroup } from './types';

export const OPEN_CONVERSATION = 'OPEN_CONVERSATION';
export const CLOSE_CONVERSATION = 'CLOSE_CONVERSATION';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';

export const openGroup = ({ id }: { id: string }) => ({
  type: OPEN_CONVERSATION,
  id,
});

export const closeGroup = () => ({
  type: CLOSE_CONVERSATION,
});

export const changeCurrentUser = ({
  nextUser,
  nextActiveGroup,
}: {
  nextUser?: User;
  nextActiveGroup: ActiveGroup;
}) => ({
  type: CHANGE_CURRENT_USER,
  payload: { nextUser, nextActiveGroup },
});
