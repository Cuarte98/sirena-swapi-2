import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";

export const fetchData = (id) => ({
  type: FETCH_DATA,
  id,
});

export const fetchDataSuccess = (id, payload) => ({
  type: FETCH_DATA_SUCCESS,
  id,
  payload,
});

export const fetchDataError = (id, error) => ({
  type: FETCH_DATA_ERROR,
  id,
  error,
});

export default {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
};
