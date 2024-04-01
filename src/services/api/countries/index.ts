// Documentation: https://restcountries.com/

import 'server-only';

import { Adapter } from '@/services/Adapter';
import { filterBy } from '@/utils/filterBy';
import { CountryItem, RawCountry } from './types';
import { CountryAdapter } from './CountryAdapter';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async (criteria: Partial<{ search: string; region: string }>) => {
	const searchFields = ['name', 'population', 'region', 'capital', 'flags'];

	const apiUrl = `${BASE_URL}/all?fields=${searchFields.join(',')}`;

	const response = await fetch(apiUrl, { cache: 'force-cache' });
	const rawData = (await response.json()) as RawCountry[];

	const data = rawData.map((item) =>
		Adapter.from(item).to((item) => new CountryAdapter(item).adaptItem()),
	);

	// Filters
	const { search, region } = criteria;
	let filteredData = data;

	if (search) {
		filteredData = filterBy<CountryItem, 'name'>(filteredData, 'name', search);
	}
	if (region) {
		filteredData = filterBy<CountryItem, 'region'>(filteredData, 'region', region);
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

export const getAllRegions = async () => {
	const searchFields = ['region'];

	const apiUrl = `${BASE_URL}/all?fields=${searchFields.join(',')}`;

	const response = await fetch(apiUrl, { cache: 'force-cache' });
	const rawData = (await response.json()) as RawCountry[];

	const data = [...new Set(rawData.map((item) => item.region))].toSorted();

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
