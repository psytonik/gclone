import React from 'react';
import Link from "next/link";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const GOOGLE_CX_ID = process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_ID;

const SearchPage = async({searchParams:{q}}:{searchParams:{q:string}}) => {

	const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX_ID}&q=${q}`)
	if(!response.ok){
		throw new Error('Something went wrong');
	}

	const data = await response.json();
	const result = await data.items;

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
			{result && result.map((m:any,index:number)=>(
				<div key={index}>
					<h1>{m.title}</h1>
					<Link href={m.link}>{m.displayLink}</Link>
				</div>
			))}
		</>
	);
};

export default SearchPage;
