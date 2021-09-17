import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from './utils/firebaseConfig.js';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Main from './components/Main.js';
import { UidContext } from './components/UidContext';

const App = () => {
	const [isSignedIn, setSignedIn] = useState(false);
	const [uid, setUid] = useState(null);

	const uiConfig = {
		signInFlow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccess: () => false,
		},
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setSignedIn(!!user);
			setUid(user?.uid);
		});
	}, []);

	return (
		<UidContext.Provider value={uid}>
			<div className='app' style={{ textAlign: 'center' }}>
				{isSignedIn ? (
					<Main />
				) : (
					<>
						<div className='login-page'>
							<div className='auth'>
								<h1>Famous quote</h1>
								<StyledFirebaseAuth
									uiConfig={uiConfig}
									firebaseAuth={firebase.auth()}
								/>{' '}
							</div>
						</div>
					</>
				)}
			</div>
		</UidContext.Provider>
	);
};

export default App;
