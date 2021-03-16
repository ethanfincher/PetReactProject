import React from 'react';

export default function DogForm({ change }) {
	return (
		<form className='dogForm'>
			<select name='breed' id='breed' onChange={change}>
				<option value='23'>Australian Shepherd</option>
				<option value='115'>German Shepherd</option>
				<option value='76'>Chesapeake Bay Retriever</option>
				<option value='121'>Golden Retriever</option>
				<option value='41'>Bernese Mountain Dog</option>
				<option value='149'>Labrador Retriever</option>
				<option value='222'>Shiba Inu</option>
				<option value='55'>Boxer</option>
				<option value='28'>Basenji</option>
			</select>
		</form>
	);
}
