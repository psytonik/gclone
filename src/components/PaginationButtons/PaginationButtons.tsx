'use client';
import React from 'react';
import {useSearchParams, usePathname} from "next/navigation";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai";
import Link from "next/link";

const PaginationButtons = () => {
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const q = searchParams.get('q');
	const startIndex = Number(searchParams.get('start') || 1);


	return (
		<div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
			{startIndex >= 10 && (
				<Link href={`${pathName}?q=${q}&start=${startIndex -10}`}>
					<div className="flex flex-col cursor-pointer items-center hover:underline">
						<AiOutlineArrowLeft className="h-5"/>
						<p>Previous</p>
					</div>
				</Link>
			)}
			{startIndex <= 90 && (
				<Link href={`${pathName}?q=${q}&start=${startIndex +10}`}>
					<div className="flex flex-col cursor-pointer items-center hover:underline">
						<AiOutlineArrowRight className="h-5"/>
						<p>Next</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default PaginationButtons;
