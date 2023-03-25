import React from 'react';
import Link from "next/link";
import {TbGridDots} from 'react-icons/tb';

const HomeHeader = () => {
	return (
		<header className="flex justify-end p-5 text-sm">
			<div className="flex space-x-4 items-center">
				<Link href="https://mail.google.com" className="hover:underline">Gmail</Link>
				<Link href="https://images.google.com" className="hover:underline">Images</Link>
				<TbGridDots className="headerIcon"/>
				<button className="signInBtn">Sign In</button>
			</div>
		</header>
	);
};

export default HomeHeader;
