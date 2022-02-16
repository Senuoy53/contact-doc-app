import { ActionTypes } from "./constants";
import { DoctorsState } from "./types";
import { Action } from "../../utils/types";

const initialState: DoctorsState = {
  doctors: [],
};

const doctorsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
