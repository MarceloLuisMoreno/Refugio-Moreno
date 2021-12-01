import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCBQ_wQx8ja-WbYHZAAOOXlx-UY9JO7J9c",
	authDomain: "refugio-ecommerce.firebaseapp.com",
	projectId: "refugio-ecommerce",
	storageBucket: "refugio-ecommerce.appspot.com",
	messagingSenderId: "471407983104",
	appId: "1:471407983104:web:03590b2b10cc199191b6e5",
}

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
	return firebase.firestore(app)
}
