import React from 'react';

export default function DogCard({ petList }) {
	return (
		<div>
			{petList.map((pet) => {
				return (
					<div className='petCard'>
						<img src={pet.url} alt='' className='petImage'></img>
						<h3>{pet.breeds[0].name}</h3>
						<ul className = 'description'>
							<li>Lifespan: {pet.breeds[0].life_span}</li>
							<li>Weight: {pet.breeds[0].weight.imperial} lbs</li>
							<li>Bred For: {pet.breeds[0].bred_for}</li>
							<li>Loose Description: {pet.breeds[0].temperament}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}
