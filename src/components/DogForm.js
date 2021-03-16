import React from 'react';

export default function DogForm({ change, submit }) {
	return (
		<form onSubmit={submit}>
			<label for='breed'>Breed: </label>
			<select name='breed' id='breed' onChange={change}>
				<option value='23'>Australian Shepherd</option>
				<option value='115'>German Shepherd</option>
				<option value='76'>Chesapeake Bay Retriever</option>
				<option value='121'>Golden Retriever</option>
			</select>
			<button type='submit'>search</button>
		</form>
	);
}
