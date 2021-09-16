import React, { useState, useContext } from 'react';
import firebase from '../utils/firebaseConfig';
import { UidContext } from './UidContext';
import { IoCloseSharp } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';

function UpdateDelete({ quote }) {
	const [update, setUpdate] = useState(false);
	const [authorUpdate, setAuthorUpdate] = useState(null);
	const [textUpdate, setTextUpdate] = useState(null);

	const uid = useContext(UidContext);

	const authorCheck = () => {
		if (quote.uid === uid) {
			return true;
		} else {
			return false;
		}
	};

	authorCheck();

	const updateQuote = () => {
		let quoteToUpdate = firebase.database().ref('quotesDB').child(quote.id);

		if (authorUpdate !== null) {
			quoteToUpdate.update({
				author: authorUpdate,
			});
		}
		if (textUpdate !== null) {
			quoteToUpdate.update({
				text: textUpdate,
			});
		}

		setUpdate(false);
	};

	const deleteQuote = () => {
		let quoteToDelete = firebase.database().ref('quotesDB').child(quote.id);
		quoteToDelete.remove();
	};

	return (
		<li>
			{update === false && (
				<>
					{authorCheck() && (
						<div className='buttons-container'>
							{/* <button onClick={() => setUpdate(!update)}>Update</button>
							<button onClick={deleteQuote}>Delete</button> */}
							<AiFillEdit
								onClick={() => setUpdate(!update)}
								style={{ fontSize: 20 }}
							/>
							<IoCloseSharp onClick={deleteQuote} />
						</div>
					)}
					<div className='item-container'>
						<p>"{quote.text}"</p>
						<h5>{quote.author}</h5>
						<br />
					</div>
				</>
			)}
			{update && (
				<div className='item-container-update'>
					<textarea
						defaultValue={quote.text}
						onChange={(e) => setTextUpdate(e.target.value)}
					/>
					<input
						type='text'
						defaultValue={quote.author}
						onChange={(e) => setAuthorUpdate(e.target.value)}
					/>
					<button onClick={updateQuote}> Confirm update</button>
				</div>
			)}
		</li>
	);
}

export default UpdateDelete;
