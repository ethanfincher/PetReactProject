import React, { useState, useEffect } from 'react';
import RandomCatForm from './RandomCatForm';


export default function RandomCatPage() {
	const initialUrlSettings = {
		base: 'https://api.thecatapi.com/v1/images/search?',
		category: '5',
		// key: process.env.CAT_API_KEY,
		limit: '5',
	};

	const [urlSettings, setUrlSettings] = useState(initialUrlSettings);
	const [catList, setCatList] = useState([]);

	function categoryChange(event) {
		// console.log(event.target.value)
		setUrlSettings({ ...urlSettings, category: `${event.target.value}` });
		// console.log(urlSettings)
	}
	function categorySubmit(event) {
		event.preventDefault();
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&category_ids=${urlSettings.category}`
		);
	}
	function getAPIList(url) {
		// console.log(url)
		fetch(url, {
			// headers: {'X-API-KEY': `${urlSettings.key}`}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCatList(data);
			});
	}

	useEffect(() => {
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&category_ids=${urlSettings.category}`
		);
	}, []);

	return (
		<>
			<RandomCatForm change={categoryChange} submit={categorySubmit}></RandomCatForm>
            {catList.map((cat)=>{
                return (<img src = {cat.url} alt = ''></img>)
            })}
		</>
	);
}
