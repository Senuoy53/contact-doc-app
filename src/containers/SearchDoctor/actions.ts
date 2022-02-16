import { ActionTypes } from "./constants";
import { Doctor } from "../../utils/types";

const setDoctors = (payload: Doctor[]) => {
  return {
    type: ActionTypes.SET_DOCTORS,
    payload,
  };
};

export { setDoctors };
