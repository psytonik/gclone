import {HomeHeader, HomeSearch} from "@/components";
import React from "react";
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<HomeHeader/>
			<div className="flex flex-col items-center mt-24">
				<Image
					alt="google photo"
					src="https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
					width={300}
					height={100}
				/>
                <HomeSearch/>
			</div>
		</>
	)
}
