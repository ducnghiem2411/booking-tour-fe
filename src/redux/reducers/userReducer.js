import { transpileModule } from "typescript";
import * as type from "../TypeAction";

const initialState = {
  loading: false,
  message: "",
  dataUser: null,
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_INFO_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.GET_INFO_USER_SUCCED:
      return {
        ...state,
        dataUser: action.data,
        loading: false,
      };

    case type.GET_INFO_USER_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
      };

    case type.UPDATE_INFO_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_INFO_USER_SUCCED:
      return {
        ...state,
        loading: false,
        dataUser: action.data,
      };

    case type.UPDATE_INFO_USER_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
      };

    default:
      return state;
  }
}
