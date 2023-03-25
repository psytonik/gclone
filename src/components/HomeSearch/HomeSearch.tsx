'use client';
import React, {FormEvent, useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import Image from 'next/image'
import {useRouter} from "next/navigation";
const HomeSearch = () => {
	const [input, setInput] = useState("");
	const [randomSearchLoading, setRandomSearchLoading] = useState(false);

	const router = useRouter();
	const handleSubmit = (e:FormEvent) => {
		e.preventDefault();
		if(!input.trim()){
			return;
		}
		router.push(`/search/web?q=${input}`)
	}
	const randomSearch = async () => {
		setRandomSearchLoading(true);
		const response = await fetch('https://random-word-api.herokuapp.com/word')
			.then((res)=>res.json())
			.then((data) => data[0]);

		if(!response.trim()){
			return;
		}

		router.push(`/search/web?q=${response}`);
		setRandomSearchLoading(false);
	}
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="searchForm"
			>

				<AiOutlineSearch className="text-xl text-gray-500 mr-3"/>

				<input
					type="text"
					className="flex-grow focus:outline-none"
					onChange={(e)=>setInput(e.target.value)}
					value={input}
				/>

				<Image src="/mic.svg" alt="microphone"  width={24} height={24} className="searchBoxIcons"/>
				<Image src="/camera.svg" alt="camera"  width={24} height={24} className="searchBoxIcons"/>
			</form>

			<div className="flex mt-7 space-x-4">
				<button
					onClick={handleSubmit}
					className="btn"
				>
					Google Search
				</button>
				<button
					className="btn flex items-center justify-center disabled:opacity-80"
					onClick={randomSearch}
					disabled={randomSearchLoading}
				>
					{randomSearchLoading ?(<Image
						src="spinner.svg"
						className="h-6 text-center"
						alt="spinner"
						width={64}
						height={64}
					/>):`I'm feeling lucky`}
				</button>
			</div>
		</>
	);
};

export default HomeSearch;
