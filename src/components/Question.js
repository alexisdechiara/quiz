import React, {useState, useEffect} from 'react';
import {ArrowSmDownIcon} from '@heroicons/react/solid'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link, useParams} from 'react-router-dom'
import {ArrowCircleRightIcon} from '@heroicons/react/solid'
import firestore from "./firebase.js"
import Json from "../data/question.json"

function Question() {
	const [disable, setDisable] = useState(false);
	const [learnMore, setLearnMore] = useState(false);
	const [next, setNext] = useState(false);
	const [slug, setSlug] = useState("");
//const [data, setData] = useState({});
	const {ref} = useParams();

	document.title = "Quiz | Question";
	console.log("data :", Json);
	let data = Json;

	useEffect(() => {
		firestore.collection("questions")
		.doc(ref)
		.get()
		.then((doc) => {
			if (doc.exists) {
				console.log("Document data:", doc.data());
				//setData(doc.data());
			} else {
				console.log("No such document!");
			}})
		.catch((error) => {
			console.log("Error getting document:", error);
		});
	},[ref]);

	function select(i) {
		let e = document.getElementById(i.toString());
		setDisable(true);
		e.classList.add("bg-custom-blue", "text-white");
		setTimeout(function(){
			if(Number(i) === Number(data.answer.correct)){
				e.classList.add("bg-custom-green", "border-custom-green", "hover:bg-custom-green", "text-white");
			} else {
				let c = document.getElementById((data.answer.correct).toString());
				e.classList.add("bg-custom-red", "border-custom-red", "hover:bg-custom-red", "text-white");
				c.classList.add("bg-custom-green", "border-custom-green", "hover:bg-custom-green", "text-white");
			}
			setTimeout(function(){
				setLearnMore(true);
			}, 500);
			setTimeout(function(){
				setNext(true);
			}, 3000);
		}, 1000);
	}

	return (
			<>
				<div className={`w-full ${learnMore ? "h-full" : "h-screen"} pt-8 flex flex-col items-center justify-center dark:bg-custom-black`}>
					<div className="w-2/3 h-full p-4">
						<img src={data.question.image.src} alt={data.question.image.alt}/>
						<h2 className="my-4 text-lg dark:text-white">{data.question.text}</h2>
						<div className="grid grid-rows-2 grid-cols-2 gap-y-2 gap-x-4 text-center dark:text-white">
							{data.answer.proposal.map((e,i) => {
									return [
								<button onClick={() => select(i+1)} disabled={disable} className="row-span-1 col-span-1 border-2 rounded-md border-custom-blue p-2 cursor-pointer font-medium transition motion-reduce:transition-none ease-out duration-300 hover:bg-custom-blue hover:text-white" key={`proposal-${e.id}-${i}`} id={i+1}>{e}</button>
								]
							})}
						</div>
					</div>
					{ learnMore &&
					<AnchorLink offset={() => 32} id="moreBtn" href="#learn-more" className="flex w-auto static justify-center pl-4 pr-2 mt-12 cursor-pointer bottom-8 rounded-full bg-blue-100 dark:bg-transparent dark:text-white text-xl whitespace-nowrap text-custom-blue font-semibold animate-fade-in-down transition motion-reduce:transition-none duration-300 transform motion-reduce:transform-none hover:-translate-y-1">
						En apprendre plus <ArrowSmDownIcon className="inline h-8 w-8"/>
					</AnchorLink>
					}
				</div>
				{ learnMore &&
					<div className="flex p-4 pt-32 items-center justify-center dark:bg-custom-black">
						<div id="learn-more" className="w-2/3 flex flex-col py-4 px-8 shadow-md text-justify text-normal rounded-lg dark:bg-custom-dark">
							{data.explanation.map((e, i) => {
								return [
									e.subtitle !== "" && <h2 key={`subtitle-${e.id}-${i}`} className="mb-2 font-bold text-2xl dark:text-white">{e.subtitle}</h2>,
									e.image.src !== "" && <img key={`img-${e.id}-${i}`} className="mb-8 dark:text-white" src={e.image.src} alt={e.image.alt}/>,
									e.text !== "" && <p key={`text-${e.id}-${i}`} className="mb-8 dark:text-white">{e.text}</p>
								]
							})}
						</div>
					</div>
				}
				{ next &&
				<Link to={`/question/${slug}`}>
					<ArrowCircleRightIcon className="fixed right-16 top-1/3 h-24 text-custom-blue transition motion-reduce:transition-none duration-300 animate-fade-in transform motion-reduce:transform-none hover:scale-110"/>
				</Link>
				}
			</>
	);
}

export default Question;
