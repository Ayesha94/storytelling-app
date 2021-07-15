import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/app'

export const firebaseConfig={
    apiKey: "AIzaSyDjT65THrfHdq_JPOZ6qCGEfpempSbUyjQ",
    authDomain: "ishita-wireless-buzzer.firebaseapp.com",
    databaseURL: "https://ishita-wireless-buzzer-default-rtdb.firebaseio.com",
    projectId: "ishita-wireless-buzzer",
    storageBucket: "ishita-wireless-buzzer.appspot.com",
    messagingSenderId: "927718601687",
    appId: "1:927718601687:web:0763614fe8d9b9f396d192",
    measurementId: "G-HN352FZ33B"

};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}