import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { Product } from './types';

const firebaseConfig = { /* your config */
  apiKey: "AIzaSyDDlkdT8uTRiInLEvIpbwBrcQr2W8Qxrjg",
  authDomain: "ai-products-fyi.firebaseapp.com",
  projectId: "ai-products-fyi",
  storageBucket: "ai-products-fyi.appspot.com",
  messagingSenderId: "200912904917",
  appId: "1:200912904917:web:20d0b0228d1701f6a6785c",
  measurementId: "G-1NJ9427M8Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(collection(db, "products"))
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
}

export const fetchProduct = async (id: string): Promise<Product> => {
  const snapshot = await getDoc(doc(db, id));
  return { id: snapshot.id, ...snapshot.data() } as Product;
}

export { db }
