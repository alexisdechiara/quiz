import React, {useState, useEffect} from 'react';
import { PlayIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'
import firestore from "./firebase.js"

function Home() {
	const [slug,setSlug] = useState('');
	document.title="Quiz | Accueil";
	return (
		<div className="h-screen w-screen sm:bg-wave sm:bg-cover flex items-center justify-center flex-col dark:bg-custom-black">
			<h1 className="font-bolder text-8xl text-custom-black dark:text-white">What the Quiz</h1>
			<h2 className="font-medium text-custom-black dark:text-white">Amusez vous tout en apprenant</h2>
			<Link to={`/question/${slug}`}>
				<PlayIcon className="mt-4 h-20 text-custom-blue cursor-pointer"/>
			</Link>
	  </div>
	);
}

export default Home;
