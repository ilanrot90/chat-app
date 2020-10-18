import React from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import ChatDrawer from 'components/Drawer/ChatDrawer';
import ChatsContainer from 'components/ChatsContainer';

const AppContainer = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <>
      <AppContainer className="App">
        <Header />
        <ChatsContainer />
      </AppContainer>
      <ChatDrawer />
    </>
  );
}

export default App;
