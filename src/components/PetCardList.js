import React from 'react';


export default function PetCardList({ catList }) {

	return (
		<div>
			{catList.map((cat) =>{
				return(
				<div>
					<img src = {cat.url} alt = ''></img>
				</div>
					)
			})}
		</div>
	);
}
