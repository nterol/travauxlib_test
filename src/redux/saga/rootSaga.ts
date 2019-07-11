import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import fetcher from "./fetch";

function* workerSaga() {
  try {
    const data = yield call(fetcher);

    const {
      token,
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
      modalitesPaiement,
      prixTotalHT,
      prixTotalTTC,
      montantsTVA,
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
      montantsTVA,
      modalitesPaiement
    };

    yield put({ type: actionTypes.setPayment, payload: payment });

    const devisInfo = {
      token,
      deal,
      title,
      introductionLetter,
      insurances,
      date,
      dureeValidite
    };

    console.log(JSON.stringify(locations));

    yield put({ type: actionTypes.setDevisInfo, payload: devisInfo });
    yield put({ type: actionTypes.setLocation, payload: { locations, lots } });

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
