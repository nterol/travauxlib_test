import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";

import watcherSaga from "./saga/rootSaga";
import devisReducer from "./reducers/devisReducer";
import lotsReducer from "./reducers/lotReducer";
import paymentReducers from "./reducers/paymentReducer";
import companyReducer from "./reducers/companyReducer";
import queryReducer from "./reducers/queryReducer";
import locationReducer from "./reducers/locationReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  devis: devisReducer,
  payment: paymentReducers,
  lots: lotsReducer,
  company: companyReducer,
  query: queryReducer,
  location: locationReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
