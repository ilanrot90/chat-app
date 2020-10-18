import React, { FC } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from 'styles/theme/ThemeProvider';
import { configureStore } from 'store';
import { IState } from 'store/types';

interface IProps {
  initialState?: IState | undefined;
  children: React.ReactChild;
}
const RootProvider: FC<IProps> = ({ initialState, children }) => {
  const store = configureStore({ initialState });

  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(
  <RootProvider>
    <App />
  </RootProvider>,
  document.getElementById('root'),
);
