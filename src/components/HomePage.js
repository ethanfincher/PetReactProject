import React from 'react'

export default function HomePage() {
    return (
			<div>
				<h2>Welcome to Ethan's Pet Info and Random Picture Website!</h2>
				<p className='intro'>
					Here you can look up both cat and dog info in specific breeds, as well
					as find a large variety of random cat pictures! Just click on one of
					the links above to be taken to one of the pet pages and begin
					exploring the wonder of pets!
				</p>
				{/* giphies from https://giphy.com/ */}
				<img
					src='https://media3.giphy.com/media/l2JJDdD7cv4xdGGis/200w.webp?cid=ecf05e47kv2paqqb08ib9dvn7lscx29aob5bck6rlzvxzmym&rid=200w.webp'
					alt=''
					className='introImage'
					id='one'></img>
				<img
					src='https://media4.giphy.com/media/11c7UUfN4eoHF6/giphy.webp?cid=ecf05e47kv2paqqb08ib9dvn7lscx29aob5bck6rlzvxzmym&rid=giphy.webp'
					alt=''
					className='introImage'
					id='two'></img>
				<img
					src='https://media3.giphy.com/media/ND6xkVPaj8tHO/200.webp?cid=ecf05e47kv2paqqb08ib9dvn7lscx29aob5bck6rlzvxzmym&rid=200.webp'
					alt=''
					className='introImage'
					id='three'></img>
				<img
					src='https://media4.giphy.com/media/13borq7Zo2kulO/200w.webp?cid=ecf05e47kv2paqqb08ib9dvn7lscx29aob5bck6rlzvxzmym&rid=200w.webp'
					alt=''
					className='introImage'
					id='four'></img>
			</div>
		);
}
