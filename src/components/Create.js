import React, { useState, useContext } from 'react';
import firebase from '../utils/firebaseConfig';
import { UidContext } from './UidContext';

const Create = () => {
	const [author, setAuthor] = useState('');
	const [text, setText] = useState('');

	const uid = useContext(UidContext);

	const createQuote = () => {
		const quotesDB = firebase.database().ref('quotesDB');
		const quote = {
			uid,
			author,
			text,
		};

		if (!author || !text) {
			return alert('Hey! Missing something here');
		}

		quotesDB.push(quote);

		setAuthor('');
		setText('');
	};

	return (
		<div className='create'>
			<h4>Déposer une citation</h4>
			<div className='form'>
				<input
					type='text'
					placeholder='Author'
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<textarea
					type='text'
					placeholder='Citation'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button onClick={createQuote}> Send it ! </button>
			</div>
		</div>
	);
};

export default Create;
