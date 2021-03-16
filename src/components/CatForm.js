import React from 'react';

export default function CatForm({ change }) {
	return (
		<form className='catForm'>
			<select name='breed' id='breed' onChange={change}>
				<option value='abys'>Abyssinian</option>
				<option value='abob'>American Bobtail</option>
				<option value='asho'>American Shorthair</option>
				<option value='beng'>Bengal</option>
				<option value='crex'>Cornish Rex</option>
				<option value='dons'>Donskoy</option>
				<option value='lihu'>Dragon Li</option>
				<option value='mcoo'>Maine Coon</option>
				<option value='sfol'>Scottish Fold</option>
			</select>
		</form>
	);
}
