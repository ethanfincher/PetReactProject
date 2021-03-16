import React, { useState, useEffect } from 'react';
import DogForm from './DogForm';
import DogCard from './DogCard.js';

export default function DogPage() {
	const initialUrlSettings = {
		base: 'https://api.thedogapi.com/v1/images/search?',
		breed: '23',
		// key: process.env.dog_API_KEY,
		limit: '1',
	};

	const [urlSettings, setUrlSettings] = useState(initialUrlSettings);
	const [dogList, setDogList] = useState([]);

	function breedChange(event) {
		// console.log(event.target.value)
		setUrlSettings({ ...urlSettings, breed: `${event.target.value}` });
		// console.log(urlSettings)
	}
	function breedSubmit(event) {
		event.preventDefault();
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${urlSettings.breed}`
		);
	}
	function getAPIList(url) {
		// console.log(url)
		fetch(url, {
			// headers: {'X-API-KEY': `${urlSettings.key}`}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data[0].url);
				setDogList(data);
			});
	}

	useEffect(() => {
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${urlSettings.breed}`
		);
	}, []);

	return (
		<>
			<DogForm change={breedChange} submit={breedSubmit}></DogForm>
			<DogCard petList={dogList}></DogCard>
		</>
	);
}
