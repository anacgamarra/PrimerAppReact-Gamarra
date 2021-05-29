import firebase from 'firebase/app';
import 'firebase/firestore';


// const app = firebase.initializeApp({
//     apiKey: "AIzaSyBIH-69iT-91DSGdtXy2NOO7jhee2Be5uQ",
//     authDomain: "mitienda-coder.firebaseapp.com",
//     projectId: "mitienda-coder",
//     storageBucket: "mitienda-coder.appspot.com",
//     messagingSenderId: "348378885981",
//     appId: "1:348378885981:web:38b6b7c87568ac96b342b4"
// })

const app = firebase.initializeApp({
        apiKey: "AIzaSyClsYOgZIg6j29n63kiKrjaRNpEjHh7OUM",
        authDomain: "tienda-coder-a6cda.firebaseapp.com",
        projectId: "tienda-coder-a6cda",
        storageBucket: "tienda-coder-a6cda.appspot.com",
        messagingSenderId: "69533780291",
        appId: "1:69533780291:web:26c5e61f368592ee7cc7f6"
})




export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}


//esporar otras integraciones de firebase