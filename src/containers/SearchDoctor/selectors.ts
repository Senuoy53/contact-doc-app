import { createSelector } from "reselect";
import { GlobalState, Doctor } from "../../utils/types";
import { DoctorsState } from "./types";

const selectFromDoctorsStateDomain = (globalState: GlobalState): DoctorsState =>
  globalState.doctorsState;

const makeSelectDoctorsData = () =>
  createSelector(
    selectFromDoctorsStateDomain,
    (doctorsState: DoctorsState): Doctor[] => doctorsState.doctors
  );

const makeSelectVillesData = () =>
  createSelector(
    selectFromDoctorsStateDomain,
    (doctorsState: DoctorsState): string[] => doctorsState.villes
  );

export { makeSelectDoctorsData, makeSelectVillesData };
