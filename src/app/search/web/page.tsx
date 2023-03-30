import React from 'react';
import Link from "next/link";
import {WebSearchResults} from "@/components";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const GOOGLE_CX_ID = process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_ID;

const SearchPage = async({searchParams:{q,start = 1}}:{searchParams:{q:string,start:number}}) => {
	// await new Promise((resolve)=>setTimeout(resolve,5000))
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${
			GOOGLE_CX_ID}&q=${q}&start=${start}`)
	if(!response.ok){
		console.log(response)
		throw new Error('Something went wrong');
	}

	const data = await response.json();
	const result = data.items;

	if(!result) {
		return (
			<div className="flex flex-col justify-center items-center pt-10">
				<h1 className="text-3xl mb-4">No results found for {q}</h1>
				<p className="text-lg">Try search for something else or back to <Link
					className="text-blue-500"
					href="/">Homepage</Link></p>
			</div>
		)
	}

	return (
		<>

			{result && <WebSearchResults />}
		</>
	);
};

export default SearchPage;
