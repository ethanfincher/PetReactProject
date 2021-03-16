import React, { useState, useEffect } from 'react';
import CatForm from './CatForm';
import CatCard from './CatCard.js';

export default function CatPage() {
	const initialUrlSettings = {
		base: 'https://api.thecatapi.com/v1/images/search?',
		breed: 'abys',
		// key: process.env.CAT_API_KEY,
		limit: '1',
	};

	const [urlSettings, setUrlSettings] = useState(initialUrlSettings);
	const [catList, setCatList] = useState([]);

	function breedChange(event) {
		event.preventDefault();
		// console.log(event.target.value)
		setUrlSettings({ ...urlSettings, breed: `${event.target.value}` });
		// console.log(urlSettings)
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${event.target.value}`
		);
	}

	function getAPIList(url) {
		// console.log(url)
		fetch(url, {
			// headers: {'X-API-KEY': `${urlSettings.key}`}
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(data[0].breeds[0].name)
				setCatList(data);
			});
	}

	useEffect(() => {
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${urlSettings.breed}`
		);
	}, []);

	return (
		<div className='cats'>
			<div className='heading'>
				<h2>Welcome to the cat page!</h2>
				<p>
					Select a cat breed from the dropdown to see a picture and description
					if your favorite kind of cat!
				</p>
			</div>
			<CatForm change={breedChange}></CatForm>
			<CatCard petList={catList}></CatCard>
		</div>
	);
}
