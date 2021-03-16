import React, { useState, useEffect } from 'react';
import RandomCatForm from './RandomCatForm';


export default function RandomCatPage() {
	const initialUrlSettings = {
		base: 'https://api.thecatapi.com/v1/images/search?',
		category: '5',
		limit: '5',
	};

	const [urlSettings, setUrlSettings] = useState(initialUrlSettings);
	const [catList, setCatList] = useState([]);

	function categoryChange(event) {
        event.preventDefault();
		// console.log(event.target.value)
		setUrlSettings({ ...urlSettings, category: `${event.target.value}` });
				getAPIList(
					`${urlSettings.base}limit=${urlSettings.limit}&category_ids=${event.target.value}`
				);
		// console.log(urlSettings)
	}
	
	function getAPIList(url) {
		// console.log(url)
		fetch(url, {
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCatList(data);
			});
	}

	function more(event){
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&category_ids=${urlSettings.category}`
		);
	}

	useEffect(() => {
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&category_ids=${urlSettings.category}`
		);
	}, []);

	return (
		<>
			<h2>Random Cat Pictures!</h2>
			<p className='intro'>
				Just select the category of cat you would like to see. You can also hit
				the More button to see extra pictures of the currentl category of cat!
			</p>
			<RandomCatForm change={categoryChange} click={more}></RandomCatForm>
			{catList.map((cat) => {
				return <img src={cat.url} alt='' className='randomImage'></img>;
			})}
		</>
	);
}
