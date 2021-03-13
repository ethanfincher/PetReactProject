import React, { useState, useEffect } from 'react';
import PetCard from './PetCard.js';

export default function PetCardList() {

	const [catList, setCatList] = useState([]);

	// useEffect(() => {
	// 	fetch('https://api.thecatapi.com/v1/images/search?limit=5')
	// 		.then((response) => response.json())
	// 		.then((data) => setCatList(data));
	// }, []);

	return (
		<div>
			{catList.map((cat) => (
				<PetCard cat={cat} />
			))}
		</div>
	);
}
