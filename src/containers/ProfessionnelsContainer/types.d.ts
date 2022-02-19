interface ProfessionnelsTypes {
  specialite: string;
  ville: string;
  tel: string | null;
}

interface InitialValuesTypes {
  nom: string | undefined;
  email: string | undefined;
  specialite: string;
  ville: string;
  tel: string;
  adresse: string | undefined;
  siteweb: string | undefined;
  ouverture: HoraireData;
  diplomes: string | undefined;
}
