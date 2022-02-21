import { firestore, auth } from "../firebase";
import { User, ValuesType } from "../utils/types";

const firebaseService = (collectionName: string) => {
  const db = firestore.collection(collectionName);

  const getAll = () => {
    return db;
  };

  const create = (data: any) => {
    return db.add(data);
  };
  const getOne = async (uid: string | undefined) => {
    if (!uid) return null;
    return db.where("uid", "==", uid).get();
  };

  const filterByAll = async (ville: string, specialite: string) => {
    return db
      .where("ville", "==", ville)
      .where("specialite", "==", specialite)
      .get();
  };

  const filterByVille = async (ville: string) => {
    return db.where("ville", "==", ville).get();
  };

  const filterBySpecialite = async (specialite: string) => {
    return db.where("specialite", "==", specialite).get();
  };

  const update = (id: string | undefined, value: any) => {
    return db.doc(id).update(value);
  };

  const remove = (id: string | undefined) => {
    return db.doc(id).delete();
  };
  return {
    getAll,
    create,
    update,
    remove,
    getOne,
    filterByAll,
    filterByVille,
    filterBySpecialite,
  };
};

const firebaseAuth = () => {
  const signIn = async ({ email, password }: ValuesType) =>
    await auth.signInWithEmailAndPassword(email, password);

  const signUp = async ({ email, password }: ValuesType) =>
    await auth.createUserWithEmailAndPassword(email, password);

  const logOut = async () => await auth.signOut();

  const deleteUser = async () => await auth.currentUser?.delete();

  return { signIn, signUp, logOut, deleteUser };
};

const currentUser = () => auth?.currentUser;
export { firebaseService, firebaseAuth, currentUser };
