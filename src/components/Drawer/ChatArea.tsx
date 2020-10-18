import React, { useState, useEffect, useCallback } from 'react';
import { ActiveGroup, IState } from 'store/types';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentUser } from 'store/actions';

const MassageContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.xl}px;
  flex-direction: column;
`;
const Massage = styled.div<{ isCurrentUser: boolean }>`
  position: relative;
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.l}px;
  padding: ${({ theme }) => theme.spacing.m}px;
  background-color: ${({ isCurrentUser, theme }) =>
    isCurrentUser ? theme.colors.green : theme.colors.light};
  align-self: ${({ isCurrentUser }) => (isCurrentUser ? 'flex-end' : 'flex-start')};
  &::before {
    ${({ isCurrentUser, theme }) =>
      isCurrentUser && css
        ? `
  left: auto;
  right: -28px;
  border-width: 0 16px 16px 16px;
  border-color: transparent;
  border-left-color: ${theme.colors.green};
    `
        : css`
position: absolute;
    left: -10px;
    top: 0;
    content: "";
    display: block;
    border: solid;
    border-width: 0 16px 16px 0px;
    border-color: transparent;
    border-right-color: ${theme.colors.light};
}
`}
  }
`;

const TextInput = styled.input`
  width: 90%;
  height: 60%;
  border-radius: 25px;
  outline: none;
  border: none;
  padding-left: 20px;
`;

const TextInputBlock = styled.div`
  margin-top: auto;
  height: 80px;
  background-color: #61dafb;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type IProps = {
  activeGroup: ActiveGroup;
};

const ChatArea = ({ activeGroup }: IProps) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { currentUser } = useSelector((s: IState) => s.chat);
  const handleChange = useCallback(({ target }) => {
    setValue(target.value);
  }, []);

  const handleSubmit = useCallback(
    ({ key }) => {
      if (key.toLowerCase() === 'enter' && !!value) {
        const nextActiveGroup = {
          ...activeGroup,
          history: [
            ...(activeGroup?.history || []),
            { userId: currentUser.id, date: new Date(), text: value },
          ],
        };
        const nextUser = activeGroup?.users.filter((user) => user.id !== currentUser.id)[0];
        dispatch(changeCurrentUser({ nextActiveGroup, nextUser }));
        setValue('');
      }
    },
    [value, currentUser, activeGroup, dispatch],
  );

  return (
    <>
      <MassageContainer>
        {activeGroup?.history.map((massage, idx) => (
          <Massage key={`${massage.text}_${idx}`} isCurrentUser={currentUser.id === massage.userId}>
            {massage.text}
          </Massage>
        ))}
      </MassageContainer>
      <TextInputBlock>
        <TextInput
          placeholder="type your massage here"
          value={value}
          onChange={handleChange}
          onKeyPress={handleSubmit}
        />
      </TextInputBlock>
    </>
  );
};

export default React.memo(ChatArea);
