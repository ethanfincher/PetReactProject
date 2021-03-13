import React, { useState, useEffect } from 'react';
import PetForm from './PetForm';
import PetCardList from './PetCardList.js';

export default function PetPage() {
	
	const initialUrlSettings = {
		base: 'https://api.thecatapi.com/v1/images/search?',
		breed: '',
		// key: process.env.CAT_API_KEY,
		limit: '5'
	};

	const [urlSettings, setUrlSettings] = useState(initialUrlSettings)
	const [catList, setCatList] = useState([])
	
	function breedChange(event){
		// console.log(event.target.value)
		setUrlSettings({...urlSettings, breed: `${event.target.value}`})
		// console.log(urlSettings)
	}
	function breedSubmit(event){
		event.preventDefault()
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${urlSettings.breed}`
		);
	}
	function getAPIList(url){
		// console.log(url)
		fetch(url, {
			// headers: {'X-API-KEY': `${urlSettings.key}`}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setCatList(data)});
	}

	useEffect(()=>{
		getAPIList(
			`${urlSettings.base}limit=${urlSettings.limit}&breed_id=${urlSettings.breed}`
		);
	}, [])
	
	return (
		<>
			<PetForm change = {breedChange} submit = {breedSubmit}></PetForm>
			<PetCardList catList = {catList}></PetCardList>
		</>
	);
}
