import {
  ERROR_FLAG,
  TABLE_LIST_DATA,
  TABLE_RESULT_DATA,
  DATA_LOADING,
  TABLE_LIST_LOADING,
} from "../actions/types";

const initialState = {
  tablelist: [],
  tableresult: [],
  errloading: false,
  loading: false,
  tablelistloading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TABLE_LIST_LOADING:
      return {
        ...state,
        tablelistloading: true,
      };
    case ERROR_FLAG:
      return {
        ...state,
        errloading: true,
        loading: false,
      };
    case TABLE_LIST_DATA:
      return {
        ...state,
        tablelist: action.payload,
        errloading: false,
        loading: false,
        tablelistloading: false,
      };
    case TABLE_RESULT_DATA:
      return {
        ...state,
        tableresult: action.payload,
        errloading: false,
        loading: false,
      };
    default:
      return state;
  }
}
