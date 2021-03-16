import React from 'react';

export default function CatForm({ change, submit }) {
	return (
		<form onSubmit={submit}>
			<label for='breed'>Breed: </label>
			<select name='breed' id='breed' onChange={change}>
				<option value='abys'>Abyssinian</option>
				<option value='abob'>American Bobtail</option>
				<option value='asho'>American Shorthair</option>
				<option value='beng'>Bengal</option>
			</select>
			<button type='submit'>search</button>
		</form>
	);
}
