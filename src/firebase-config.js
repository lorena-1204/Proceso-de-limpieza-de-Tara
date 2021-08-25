/* eslint-disable no-undef */
const initFirebase = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyDmaplOUN2MqufBif3JfewTQ8yteQVxTNM",
        authDomain: "proceso-de-limpieza-de-tara.firebaseapp.com",
        projectId: "proceso-de-limpieza-de-tara",
        storageBucket: "proceso-de-limpieza-de-tara.appspot.com",
        messagingSenderId: "406680463504",
        appId: "1:406680463504:web:7efd46ff199be30fcd5015",
        measurementId: "G-00FBW9XHD3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
};

export { 
    initFirebase

};
