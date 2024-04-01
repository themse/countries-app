import Link from 'next/link';

import { getAllCountries } from '@/services/api/countries';
import { Card } from '@/ui/components/molecules/Card';
import { DescriptionList } from '@/ui/components/molecules/DescriptionList';

type Props = {
	filterCriteria: Partial<{
		search: string;
	}>;
};

export const CountryList = async ({ filterCriteria }: Props) => {
	const countries = await getAllCountries(filterCriteria);

	return (
		<div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-14">
			{countries.map((country) => (
				<Link href={`/${country.slug}`} key={country.name}>
					<Card image={country.flagImg.src} title={country.name} className="h-full">
						<DescriptionList
							list={[
								{
									label: 'Population:',
									value: country.population,
								},
								{
									label: 'Region:',
									value: country.region,
								},
								{
									label: 'Capital:',
									value: country.capital,
								},
							]}
						/>
					</Card>
				</Link>
			))}
		</div>
	);
};
