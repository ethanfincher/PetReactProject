import React from 'react';

export default function PetCard({ cat }) {
	return <div>
        <img src = {cat.url} alt = ''></img>
    </div>;
}
