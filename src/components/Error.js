import React from 'react';
import { useHistory } from 'react-router-dom'

function Error() {
	document.title = "Quiz | Erreur";
	let history = useHistory();

	return (
		<div className="h-screen w-screen flex items-center justify-center dark:bg-custom-black">
			<div className="w-2/3 flex justify-center align-center flex-col">
				<div className="grid grid-rows-1 grid-cols-12 md:divide-x-2 md:divide-gray-100">
					<h1 className="col-span-12 md:col-span-4 md:mr-4 text-4xl md:text-5xl font-bold text-custom-blue md:text-right">
						404
					</h1>
					<div className="col-span-12 md:col-span-8 md:pl-4 md:border-l">
						<h2 className="text-4xl font-bolder dark:text-white">
							Page introuvable
						</h2>
						<p className="text-lg text-custom-gray dark:text-white">Veuillez verifier l'URL dans la barre d'adresse</p>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row align-center md:justify-center md:text-center mt-8">
					<button className="bg-custom-blue rounded mb-2 sm:mb-0 sm:mr-3 px-2 py-1 text-white font-medium" onClick={() => history.push('/')}>
						Retour à l'acceuil
					</button>
					<button className="bg-indigo-100 rounded mt-2 sm:mt-0 sm:ml-3 px-2 py-1 text-custom-blue font-medium" onClick={() => history.push('/questions')}>
						Jouer sur le site
					</button>
				</div>
			</div>
		</div>
	);
}

export default Error;
