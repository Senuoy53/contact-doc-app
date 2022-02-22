export interface PageSelected {
  selected: number;
}

export interface DoctorsState {
  doctors: Doctor;
  villes: string[];
}

export interface InitialValuesSearch {
  specialite: string;
  ville: string;
}
