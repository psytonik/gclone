'use client';

import React from 'react';
import {AiOutlineCamera, AiOutlineSearch} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const SearchHeaderOptions = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const query= searchParams.get('q');

	const selectTab = async (tab:string) => {
		router.push(`/search/${tab.trim()}?q=${query}`)
	}
	return (
		<div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-40 text-sm text-gray-700">
			<div
				className={`searchOptions ${pathname === '/search/web' && '!text-blue-600 !border-blue-600'}` }
				onClick={()=>selectTab("web")}
			>
				<AiOutlineSearch className="text-md "/>
				<p>All</p>
			</div>

			<div
				className={`searchOptions ${pathname === '/search/image' && '!text-blue-600 !border-blue-600'}`}
				onClick={()=>selectTab("image")}
			>
				<AiOutlineCamera className="text-md "/>
				<p>Image</p>
			</div>
		</div>
	);
};

export default SearchHeaderOptions;
