import React from 'react';


export default function PetCard({ petList }) {

	return (
		<div>
			{petList.map((pet) =>{
				return (
					<div className = 'petCard'>
						<h3>{pet.breeds[0].name}</h3>
						<img src={pet.url} alt=''></img>
						<p>{pet.breeds[0].description}</p>
					</div>
				);
			})}
		</div>
	);
}
