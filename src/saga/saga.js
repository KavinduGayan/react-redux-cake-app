import { takeEvery } from "redux-saga/effects";


function* rootSaga () {
    console.log("apply middleware")
    yield takeEvery("BUY_CAKE",logAction)
}

const logAction = () => {
    console.log("apply middleware for action => BUY_CAKE")
}

export default rootSaga