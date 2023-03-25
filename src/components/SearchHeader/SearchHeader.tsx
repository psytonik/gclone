import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {SearchBox, SearchHeaderOptions} from "@/components";
import {FiSettings} from "react-icons/fi";
import {TbGridDots} from "react-icons/tb";

const SearchHeader = () => {
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center justify-between">
				<Link href="/">
					<Image
						alt="google photo"
						src="https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
						width={92}
						height={30}
					/>
				</Link>

				<div className="flex-1">
					<SearchBox/>
				</div>
				<div className="hidden md:inline-flex space-x-2 ">
					<FiSettings className="headerIcon"/>
					<TbGridDots className="headerIcon"/>
				</div>

				<button className="signInBtn ml-2">Sign In</button>
			</div>
			<SearchHeaderOptions/>
		</header>
	);
};

export default SearchHeader;
