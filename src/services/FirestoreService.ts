import {
  doc,
  collection,
  query,
  getDocs,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  QueryConstraint,
  DocumentReference,
  CollectionReference,
} from 'firebase/firestore';

// Types
import { IDoc } from '@/types';

class FirestoreService {
  static async get<T extends IDoc>(path: string, ...getQuery: QueryConstraint[]) {
    const dbCollection = collection(this.db, path);

    const pathWithQuery = getQuery.length
      ? query(dbCollection, ...getQuery)
      : dbCollection;

    const response = await getDocs(pathWithQuery);

    const docs = response.docs;

    if (!docs.length) {
      return [];
    }

    return docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as T[];
  }

  static async getDoc<T extends IDoc>(path: string, id: string) {
    const newDoc = doc(this.db, path, id);

    const response = await getDoc(newDoc);

    if (!response.exists()) {
      throw new Error(`Item doesn't exist.`);
    }

    return { id: response.id, ...response.data() } as T;
  }

  static async add<T = any>(path: string, data: T, id?: string): Promise<any> {
    const newDoc = id ? doc(this.db, path, id) : collection(this.db, path);

    if (id) {
      return setDoc(newDoc as DocumentReference, data);
    }

    return addDoc(newDoc as CollectionReference, data);
  }

  static async edit<T = any>(path: string, data: T, id: string) {
    const newDoc = doc(this.db, path, id);

    return updateDoc(newDoc, data);
  }

  static async delete(path: string, id: string) {
    const newDoc = doc(this.db, path, id);

    return deleteDoc(newDoc);
  }

  static get db() {
    return getFirestore();
  }
}

export default FirestoreService;
