import React, { useState } from 'react'
import PetCardList from './PetCardList'

export default function PetPage() {
    const [breed, setBreed] = useState("")

    return (
			<div>
				<h1>this is the PetPage</h1>
				<form>
					<label for='breed'></label>
					<select name='breed' id='breed' onChange = {(event) => setBreed
                    (event.target.value)}>
						<option value='abys'>Abyssinian</option>
						<option value='abob'>American Bobtail</option>
						<option value='asho'>American Shorthair</option>
						<option value='beng'>Bengal</option>
					</select>
					<button type='submit'>search</button>
				</form>
				<PetCardList></PetCardList>
			</div>
		);
}
