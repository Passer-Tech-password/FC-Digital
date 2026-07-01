"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Auth } from "firebase/auth";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let auth: Auth | undefined;
let db: Firestore | undefined;
if (typeof window !== "undefined") {
  let app: FirebaseApp;
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  db = getFirestore(app);
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  auth: Auth | undefined;
  db: Firestore | undefined;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  auth: undefined,
  db: undefined,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, auth, db }}>
      {children}
    </AuthContext.Provider>
  );
};
