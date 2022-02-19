interface Doctor {
  // user: User;
  uid: string | undefined;
  nom: string | undefined;
  email?: string | undefined;
  specialite: string;
  ville: string;
  tel: string;
  adresse?: string;
  siteweb?: string;
  photo?: string;
  ouverture?: string;
  diplomes?: string;
  // nbr?: number;
}

interface User {
  uid: string | undefined;
  nom: string | undefined;
  email?: string | undefined;
}

interface ValuesType {
  nom?: string;
  email: string;
  password: string;
  specialite?: string | undefined;
  ville?: string | undefined;
  tel?: string | null;
  adresse?: string;
  siteweb?: string;
  photo?: string;
  ouverture?: string;
  diplomes?: string;
}

interface Action {
  type: string;
  payload?: any;
}

interface GlobalState {
  doctorsState: DoctorsState;
}

interface ProgressType {
  progress: number;
}

export { Doctor, ValuesType, User, Action, GlobalState, ProgressType };
