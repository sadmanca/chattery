import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCkoLzv3F3TyLdmyVsJYQFZRj9tJ4bHtIw",
  authDomain: "chattery-react-app.firebaseapp.com",
  projectId: "chattery-react-app",
  storageBucket: "chattery-react-app.appspot.com",
  messagingSenderId: "801563907880",
  appId: "1:801563907880:web:e4176c5a6cde10e948621d",
  measurementId: "G-ZFJFZM6C28"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App">
        
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

}

export default App;
