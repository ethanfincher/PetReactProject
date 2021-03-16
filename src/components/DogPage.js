import React, { useState, useEffect } from 'react';
import DogForm from './DogForm';
import DogCard from './DogCard.js';

export default function DogPage() {
	const initialUrlSettings = {
		base: 'https://api.thedogapi.com/v1/images/search?',
		breed: '113',
		limit: '1',
	};

	const [urlSettings, setUrlSettings] = useState(initialUrlSettings);
	const [dogList, setDogList] = useState([]);

	function breedChange(event) {
		event.preventDefault();
		setUrlSettings({ ...urlSettings, breed: `${event.target.value}` });
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${event.target.value}`
		);
	}
	function getAPIList(url) {
		fetch(url, {
		})
			.then((response) => response.json())
			.then((data) => {
				setDogList(data);
			});
	}

	useEffect(() => {
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${urlSettings.breed}`
		);
	}, []);

	return (
		<div className='dogs'>
			<div className='heading'>
				<h2>Dog Info Page</h2>
				<p className='intro'>
					Select a dog breed from the dropdown to see a picture and description
					if your favorite kind of dog!
				</p>
			</div>
			<DogForm change={breedChange}></DogForm>
			<DogCard petList={dogList}></DogCard>
		</div>
	);
}
