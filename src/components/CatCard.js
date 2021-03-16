import React from 'react';


export default function PetCard({ petList }) {

	return (
		<div>
			{petList.map((pet) =>{
				return (
					<div className='petCard'>
						<img src={pet.url} alt='' className='petImage'></img>
						<h3>{pet.breeds[0].name}</h3>
						<p>{pet.breeds[0].description}</p>
					</div>
				);
			})}
		</div>
	);
}
