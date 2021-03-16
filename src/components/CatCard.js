import React from 'react';

export default function PetCard({ petList }) {
	return (
		<div>
			{petList.map((pet) => {
				return (
					<div className='petCard'>
						<img src={pet.url} alt='' className='petImage'></img>
						<h3>{pet.breeds[0].name}</h3>
						<p>{pet.breeds[0].description}</p>
						<ul className='description'>
							<li>Lifespan: {pet.breeds[0].life_span}</li>
							<li>Weight: {pet.breeds[0].weight.imperial} lbs</li>
							<li>Origin: {pet.breeds[0].origin}</li>
							<li>Loose Description: {pet.breeds[0].temperament}</li>
						</ul>
						<a href={pet.breeds[0].wikipedia_url} className='wikiPage'>
							wiki page
						</a>
					</div>
				);
			})}
		</div>
	);
}
