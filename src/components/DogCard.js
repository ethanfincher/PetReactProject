import React from 'react';

export default function DogCard({ petList }) {
	return (
		<div>
			{petList.map((pet) => {
				return (
					<div className='petCard'>
						<img src = {pet.url} alt = '' className = 'petImage'></img>
					</div>
				);
			})}
		</div>
	);
}
