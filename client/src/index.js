import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Spinner from 'react-bootstrap/Spinner';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers";
import rootSaga from './sagas';



const ProfilePage = React.lazy(() => import('./Pages/App'));

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          <Suspense fallback={<Spinner className='spinner' animation="border" role="status" />}>
              <ProfilePage />
          </Suspense>
      </React.StrictMode>
    </Provider>
  , document.getElementById('root')
);


