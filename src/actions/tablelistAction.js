import axios from "axios";

import {
  TABLE_LIST_DATA,
  TABLE_RESULT_DATA,
  ERROR_FLAG,
  DATA_LOADING,
  TABLE_LIST_LOADING,
} from "./types";

// Get table list from DB
export const getData = () => (dispatch) => {
  dispatch(setTablelistloading());
  axios
    .get("https://backend-atlan.herokuapp.com/api/tablelist/getdata")
    .then((res) =>
      dispatch({
        type: TABLE_LIST_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: TABLE_LIST_DATA,
        payload: null,
      })
    );
};

// Get data from table
export const getTableData = (tablename) => (dispatch) => {
  dispatch(setDataloading());
  axios
    .get(
      `https://backend-atlan.herokuapp.com/api/tablelist/gettabledata/${tablename}`
    )
    .then((res) =>
      dispatch({
        type: TABLE_RESULT_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: TABLE_RESULT_DATA,
        payload: null,
      })
    );
};

// Run Query statement
export const querySql = (querydata) => (dispatch) => {
  dispatch(setDataloading());
  axios
    .post(
      "https://backend-atlan.herokuapp.com/api/tablelist/querysql",
      querydata
    )
    .then((res) => {
      if (res.data.fieldCount === undefined) {
        dispatch({
          type: TABLE_RESULT_DATA,
          payload: res.data,
        });
      } else {
        console.log(res.data);
      }
      dispatch(getData());
    })
    .catch((err) => {
      dispatch({
        type: ERROR_FLAG,
      });
    });
};

// Data loading
export const setDataloading = () => {
  return {
    type: DATA_LOADING,
  };
};

// Table list loading
export const setTablelistloading = () => {
  return {
    type: TABLE_LIST_LOADING,
  };
};
