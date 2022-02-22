import { ActionTypes } from "./constants";
import { DoctorsState } from "./types";
import { Action } from "../../utils/types";

const initialState: DoctorsState = {
  doctors: [],
  villes: [],
};

const doctorsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };

    case ActionTypes.SET_VILLES:
      return {
        ...state,
        villes: action.payload,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
