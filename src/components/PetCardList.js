import React, { useState } from 'react'
import PetCard from "./PetCard.js"

export default function PetCardList() {
    const petList = [
			{
				breeds: [],
				id: 'e75',
				url: 'https://cdn2.thecatapi.com/images/e75.jpg',
				width: 500,
				height: 375,
			},
			{
				breeds: [],
				categories: [{ id: 14, name: 'sinks' }],
				id: 'MTc5MjI3MA',
				url: 'https://cdn2.thecatapi.com/images/MTc5MjI3MA.jpg',
				width: 603,
				height: 605,
			},
			{
				breeds: [],
				id: '9l6',
				url: 'https://cdn2.thecatapi.com/images/9l6.jpg',
				width: 720,
				height: 960,
			},
			{
				breeds: [],
				id: 'a25',
				url: 'https://cdn2.thecatapi.com/images/a25.jpg',
				width: 400,
				height: 300,
			},
		];

        const [catList, setCatList] = useState(petList)
            return (
        <div>
            {catList.map((cat) =>(
                <PetCard cat = {cat} />
            ))}
        </div>
    )
}
