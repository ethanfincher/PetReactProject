import React, { useState, useEffect } from 'react';
import CatForm from './CatForm';
import CatCard from './CatCard.js';

export default function CatPage() {
	const initialUrlSettings = {
		base: 'https://api.thecatapi.com/v1/images/search?',
		breed: 'abys',
		limit: '1',
	};

	const [urlSettings, setUrlSettings] = useState(initialUrlSettings);
	const [catList, setCatList] = useState([]);

	function breedChange(event) {
		event.preventDefault();
		setUrlSettings({ ...urlSettings, breed: `${event.target.value}` });
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${event.target.value}`
		);
	}

	function getAPIList(url) {
		fetch(url, {})
			.then((response) => response.json())
			.then((data) => {
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
				<h2>Cat Info Page</h2>
				<p className='intro'>
					Select a cat breed from the dropdown to see a picture and description
					if your favorite kind of cat!
				</p>
			</div>
			<CatForm change={breedChange}></CatForm>
			<CatCard petList={catList}></CatCard>
		</div>
	);
}
