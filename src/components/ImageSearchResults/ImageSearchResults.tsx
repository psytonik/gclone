import React from 'react';

import Link from "next/link";

const ImageSearchResults = ({searchData}:any) => {
	return (
		<div className="pb-24 mt-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
				{searchData && searchData.items.map((data:any)=>(
					<div key={data.link} className="mb-8">
						<div className="group">
							<Link href={data.image.contextLink}>
								<img src={data.link} alt={data.title} className="h-60 group-hover:shadow-md w-full object-contain transition-shadow" />
							</Link>
							<Link href={data.image.contextLink}>
								<h2 className="group-hover:underline truncate text-xl">{data.title}</h2>
							</Link>
							<Link href={data.image.contextLink}>
								<p className="group-hover:underline text-gray-600">{data.displayLink}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSearchResults;
