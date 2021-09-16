import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebaseConfig';
import UpdateDelete from './UpdateDelete';

const Read = () => {
	const [quoteList, setQuoteList] = useState('');

	useEffect(() => {
		const quotesDB = firebase.database().ref('quotesDB');
		quotesDB.on('value', (snapshot) => {
			let previousList = snapshot.val();
			let list = [];

			for (let id in previousList) {
				list.push({ id, ...previousList[id] });
			}
			setQuoteList(list);
		});
	}, []);

	return (
		<div className='read'>
			<ul>
				{quoteList &&
					quoteList.map((quote, index) => (
						<UpdateDelete quote={quote} key={index} />
					))}
			</ul>
		</div>
	);
};

export default Read;
