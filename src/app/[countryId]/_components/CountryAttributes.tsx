import { Country } from '@/services/api/countries/types';
import { DescriptionList } from '@/ui/components/molecules/DescriptionList';

type Props = {
	country: Omit<Country, 'slug'>;
};

export const CountryAttributes = ({ country }: Props) => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			<DescriptionList
				list={[
					{
						label: 'Native Name:',
						value: country.nativeName,
					},
					{
						label: 'Population:',
						value: country.population,
					},
					{
						label: 'Region:',
						value: country.region,
					},
					{
						label: 'Sub Region:',
						value: country.subregion,
					},
					{
						label: 'Capital:',
						value: country.capital,
					},
				]}
			/>
			<DescriptionList
				list={[
					{
						label: 'Top Level Domain:',
						value: country.topLevelDomain,
					},
					{
						label: 'Currencies:',
						value: country.currencies,
					},
					{
						label: 'Languages:',
						value: country.languages,
					},
				]}
			/>
		</div>
	);
};
