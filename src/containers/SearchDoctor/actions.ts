import { ActionTypes } from "./constants";
import { Doctor } from "../../utils/types";

const setDoctors = (payload: Doctor[]) => {
  return {
    type: ActionTypes.SET_DOCTORS,
    payload,
  };
};

const setVilles = (payload: string[]) => {
  return {
    type: ActionTypes.SET_VILLES,
    payload,
  };
};

export { setDoctors, setVilles };
