import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDzqyBR3AdmFZMwKn8yJ2Qje0UgiSaBOMQ',
	authDomain: 'reactcrud-40cd5.firebaseapp.com',
	databaseURL: 'https://reactcrud-40cd5-default-rtdb.firebaseio.com',
	projectId: 'reactcrud-40cd5',
	storageBucket: 'reactcrud-40cd5.appspot.com',
	messagingSenderId: '313210206957',
	appId: '1:313210206957:web:676a27014dfc02d4a4eae4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
