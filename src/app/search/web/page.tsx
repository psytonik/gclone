import React from 'react';
import Link from "next/link";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const GOOGLE_CX_ID = process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_ID;

const SearchPage = async({searchParams:{q}}:{searchParams:{q:string}}) => {

	const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX_ID}&q=${q}`)
	const data = await response.json();
	const result = await data.items;

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
