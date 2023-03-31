'use client';
import React from 'react';
import Link from "next/link";
import parse from 'html-react-parser';
import {PaginationButtons} from "@/components";

const WebSearchResults = ({searchData}:any) => {
	const {items,searchInformation} = searchData;
	return (
		<div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-40">
			<p className="text-gray-600 text-sm mb-5 mt-3 ">
				About: {searchInformation?.formattedTotalResults} results {searchInformation?.formattedSearchTime} seconds
			</p>
			{items?.map((item:any,index:number)=>{
				return (
					<div key={index} className="mb-8 max-w-xl ">
						<div className="group flex flex-col">
							<Link href={item.link} className="text-sm truncate">{item.formattedUrl}</Link>
							<Link href={item.link} className="text-xl truncate font-medium text-blue-800">{item.title}</Link>
						</div>
						<p className="text-gray-600">{parse(item.htmlSnippet)}</p>
					</div>
				)
			})}

			<PaginationButtons/>

		</div>
	);
};

export default WebSearchResults;
