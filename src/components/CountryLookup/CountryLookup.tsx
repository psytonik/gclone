'use client';
import React,{useEffect, useState} from 'react';

const CountryLookup = () => {
	const [country, setCountry] = useState('United States');
	useEffect(()=>{
		fetch(`https://api.ip2loc.com/${process.env.NEXT_PUBLIC_IP_TO_LOOK}`)
			.then((response)=>response.json())
			.then((data)=>setCountry(data.location.country.name));

	},[])
	return (
		<div>
			{country}
		</div>
	);
};

export default CountryLookup;
