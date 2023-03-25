'use client';
import React, {FormEvent, useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import Image from "next/image";
import {RxCross2} from "react-icons/rx";
import {useSearchParams, useRouter} from 'next/navigation';

const SearchBox = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const q = searchParams.get('q');
	const [query,setQuery] = useState(q || '');

	const onSubmitForm = (e:FormEvent) => {
		e.preventDefault();
		if(!query.trim()) return;
		router.push(`/search?q=${query}`);
	}

	return (
		<form
			className="searchForm mt-0 ml-10 mr-5 flex-grow max-w-3xl items-center "
			onSubmit={onSubmitForm}
		>

			<AiOutlineSearch className="text-xl text-gray-500 mr-3"/>

			<input
				type="text"
				value={query}
				onChange={(e)=>setQuery(e.target.value)}
				className="flex-grow focus:outline-none"
			/>
			<RxCross2
				onClick={()=>setQuery('')}
				className="text-2xl text-gray-500 cursor-pointer sm:mr-2"/>
			<Image src="/mic.svg" alt="microphone"  width={24} height={24} className="searchBoxIcons border-l-2 border-gray-300"/>
			<Image src="/camera.svg" alt="camera"  width={24} height={24} className="searchBoxIcons"/>
		</form>
	);
};

export default SearchBox;
