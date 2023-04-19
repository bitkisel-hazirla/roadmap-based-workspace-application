import React from 'react';
import ReactDOM from 'react-dom/client';
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import { Provider } from 'react-redux';
import './assets/index.scss';
import App from './App';

// import userReducer from './reducers/user';
// import rootSaga from './sagas/rootSaga';
// const sagaMiddleware = createSagaMiddleware();
// const store = configureStore({
//     reducer: {
//         user: userReducer
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
//     devtools: true
// });
// TODO :: run saga middleware when saga is ready
// try {
//     sagaMiddleware.run(rootSaga);
// } catch (e) {
//     console.log(e);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // TODO :: pass store to provider
  // <Provider >
    <App />
  // </Provider>
);
