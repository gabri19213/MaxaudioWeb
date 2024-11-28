import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // <-- Si solo usas Hosting, puedes eliminar esta línea

@Injectable({ providedIn: 'root' })
export class FirebaseService {

  constructor() { 
    const firebaseConfig = {
      apiKey: "AIzaSyBNDh3lDhLL0l9uH0mGAB1qd7t5_WLCZGg",
      authDomain: "eventosmaxaudio-26fae.firebaseapp.com",
      projectId: "eventosmaxaudio-26fae",
      storageBucket: "eventosmaxaudio-26fae.firebasestorage.app",
      messagingSenderId: "380553474746",
      appId: "1:380553474746:web:ecce79a3f6945718730883",
      measurementId: "G-9Z38YPSZS3"
    };

    initializeApp(firebaseConfig);
    // getAnalytics(app);  // <-- Si solo usas Hosting, puedes eliminar esta línea
  }
}