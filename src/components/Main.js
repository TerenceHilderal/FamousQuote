import React from 'react';
import firebase from '../utils/firebaseConfig';
import Create from './Create';
import Read from './Read';

const Main = () => {
	return (
		<main>
			<nav>
				<h1>Famous quote</h1>
				<h4> Hi {firebase.auth().currentUser.displayName}</h4>
				<button onClick={() => firebase.auth().signOut()}>Log out</button>
			</nav>
			<Create />
			<Read />
		</main>
	);
};

export default Main;
