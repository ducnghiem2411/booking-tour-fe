import { transpileModule } from "typescript";
import * as type from "../TypeAction";

const initialState = {
  loading: false,
  message: "",
  dataUser: null,
  keySetting: 0,
  settingStatus: false,

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
        keySetting: state.settingStatus +1,
        settingStatus: true,
      };

    case type.UPDATE_INFO_USER_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
        keySetting: state.settingStatus +1,
        settingStatus: false,
      };

      case type.RESET_SETTING_STATUS:
      return {
        ...state,
        settingStatus: false,
        keySetting: 0
      };
    default:
      return state;
  }
}
