import {FETCHING_DATA,FETCHING_DATA_FAILURE,FETCHING_DATA_SUCCESS} from "../constants";
import getPeople from '../webServices'

export function getData() {
    return {
        type: FETCHING_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        payload: data,
    }
}

export function getDataFaliure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export function fetchData() {
    return (dispatch) => {
        dispatch(getData())
        getPeople()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((error) => {
                console.warn(error)
            })
    }
}