import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from "../saga/saga";

import rootReducer from "./rootReducer";


const sagaMiddleware = createSagaMiddleware()
const Store = createStore(rootReducer,
  compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)



export default Store