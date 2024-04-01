import Image from 'next/image';

import { getCountryByName } from '@/services/api/countries';
import { CountryBorders } from './CountryBorders';
import { CountryAttributes } from './CountryAttributes';

type Props = {
	countryName: string;
};

export const CountryDetails = async ({ countryName }: Props) => {
	const country = await getCountryByName({ name: countryName });

	if (!country) {
		return <p>Not found</p>;
	}

	return (
		<div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-20">
			<Image
				priority
				className="w-full"
				src={country.flagImg.src}
				width={300}
				height={300}
				alt={country.name}
			/>
			<div className="flex flex-col gap-y-12">
				<h2 className="text-4xl font-bold">{country.name}</h2>
				<CountryAttributes country={country} />
				{country.borders.length > 0 && <CountryBorders borders={country.borders} />}
			</div>
		</div>
	);
};
