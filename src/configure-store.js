import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
// import persistState from 'redux-localstorage';
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      // persistState(),
      applyMiddleware(
        // thunkMiddleware,
        loggerMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
