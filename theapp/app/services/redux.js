import redux from 'redux';
import ReduxService from 'ember-redux/services/redux';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import reducers from '../reducers/index';
import enhancers from '../enhancers/index';
import root from '../sagas/index';

const { createStore, applyMiddleware, compose } = redux;

const sagaMiddleware = createSagaMiddleWare();

const makeStoreInstance = ({reducers, enhancers}) => {
  const middleware = applyMiddleware(thunk, sagaMiddleware);
  const createStoreWithMiddleware = compose(middleware, enhancers)(createStore);
  const store = createStoreWithMiddleware(reducers);
  sagaMiddleware.run(root);
  return store;
};

export default ReduxService.extend({
  reducers,
  enhancers,
  makeStoreInstance
});
