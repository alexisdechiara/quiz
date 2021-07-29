import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyB4UTmV7O_bXMWZ_GNr-Cxp3bLVhWXXQgQ",
	authDomain: "what-the-quiz.firebaseapp.com",
	projectId: "what-the-quiz",
	storageBucket: "what-the-quiz.appspot.com",
	messagingSenderId: "168425204712",
	appId: "1:168425204712:web:6b028123031eda499dd25d",
	measurementId: "G-E8JJ68EM10"
});

const firestore = firebase.firestore();
export default firestore;
