import React from 'react';

export default function RandomCatForm({ change, submit }) {
	return (
		<form onSubmit={submit}>
			<label for='category'>Breed: </label>
			<select name='category' id='category' onChange={change}>
				<option value='5'>boxes</option>
				<option value='15'>cloths</option>
				<option value='1'>hats</option>
				<option value='14'>sinks</option>
				<option value='2'>space</option>
				<option value='4'>sunglasses</option>
				<option value='7'>ties</option>
                <option value='9'>dreams</option>
			</select>
			<button type='submit'>search</button>
		</form>
	);
}
