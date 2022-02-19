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

  const update = (id: string | undefined, value: any) => {
    return db.doc(id).update(value);
  };

  const remove = (id: string | undefined) => {
    return db.doc(id).delete();
  };
  return { getAll, create, update, remove, getOne };
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
