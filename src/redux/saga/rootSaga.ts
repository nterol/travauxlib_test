import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import fetcher from "./fetch";

function* workerSaga() {
  try {
    const data = yield call(fetcher);

    const {
      company,
      deal,
      title,
      insurances,
      date,
      dureeValidite,
      introductionLetter,
      sections,
      prixTotalHTAvantRemise,
      remise,
      montantRemise,
      prixTotalHT,
      prixTotalTTC,
      montantTVA,
      locations
    } = data;

    yield put({ type: actionTypes.setCompany, payload: company });
    const [{ lots }] = sections;

    yield put({ type: actionTypes.setLot, payload: lots });

    const payment = {
      prixTotalHTAvantRemise,
      remise,
      montantRemise,
      prixTotalHT,
      prixTotalTTC,
      montantTVA
    };

    yield put({ type: actionTypes.setPayment, payload: payment });

    const devisInfo = {
      deal,
      title,
      introductionLetter,
      insurances,
      date,
      dureeValidite
    };

    yield put({ type: actionTypes.setDevisInfo, payload: devisInfo });
    yield put({ type: actionTypes.setLocation, payload: locations });

    yield put({ type: actionTypes.dispatchDone });
  } catch (error) {
    console.error(error);
    yield put({ type: actionTypes.errorFetch });
  }
}

function* watcherSaga() {
  yield takeLatest(actionTypes.getData, workerSaga);
}

export default watcherSaga;
