// Documentation: https://restcountries.com/

import 'server-only';

import { Adapter } from '@/services/Adapter';
import { RawCountry } from './types';
import { CountryAdapter } from './CountryAdapter';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async (criteria: Partial<{ search: string }>) => {
	const searchFields = ['name', 'population', 'region', 'capital', 'flags'];

	const apiUrl = `${BASE_URL}/all?fields=${searchFields.join(',')}`;

	const response = await fetch(apiUrl, { cache: 'force-cache' });
	const rawData = (await response.json()) as RawCountry[];

	const data = rawData.map((item) =>
		Adapter.from(item).to((item) => new CountryAdapter(item).adaptItem()),
	);

	// Filter
	const { search } = criteria;
	let filteredData = data;

	if (search) {
		filteredData = filteredData.filter((item) =>
			item.name.toLowerCase().includes(search.toLowerCase()),
		);
	}

	return filteredData;
};

export const getCountriesByCodes = async ({ codes }: { codes: string[] }) => {
	const searchFields = ['name'];

	const apiUrl = `${BASE_URL}/alpha/?codes=${codes.join(',')}&fields=${searchFields.join(',')}`;

	const response = await fetch(apiUrl, { cache: 'force-cache' });
	const data = (await response.json()) as RawCountry[];

	return data;
};

export const getCountryByName = async ({ name }: { name: string }) => {
	const searchFields = [
		'name',
		'tld',
		'cca3',
		'currencies',
		'capital',
		'region',
		'subregion',
		'languages',
		'borders',
		'population',
		'flags',
	];

	const apiUrl = `${BASE_URL}/name/${name}?fields=${searchFields.join(',')}`;

	const response = await fetch(apiUrl, { cache: 'force-cache' });
	const [rawData] = (await response.json()) as RawCountry[];

	if (!rawData) {
		return null; // TODO refine
	}

	const rawBorders =
		rawData.borders.length > 0 ? await getCountriesByCodes({ codes: rawData.borders }) : [];

	const data = Adapter.from(rawData).to((item) => new CountryAdapter(item).adaptDetail());
	const borders = rawBorders.map((item) =>
		Adapter.from(item).to((item) => new CountryAdapter(item).adaptBorders()),
	);

	data.borders = borders;

	return data;
};

export const findCountryByRegion = async () => {
	// TODO implement
};
