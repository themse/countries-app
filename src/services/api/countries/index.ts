// Documentation: https://restcountries.com/

import 'server-only';

import { Adapter } from '@/services/Adapter';
import { RawCountry } from './types';
import { CountryAdapter } from './CountryAdapter';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
	const searchFields = ['name', 'population', 'region', 'capital', 'flags'];

	const apiUrl = `${BASE_URL}/all?fields=${searchFields.join(',')}`;

	const response = await fetch(apiUrl, { cache: 'force-cache' });
	const rawData = (await response.json()) as RawCountry[];

	const data = rawData.map((item) =>
		Adapter.from(item).to((item) => new CountryAdapter(item).adaptList()),
	);

	return data;
};

export const getCountryByName = async (name: string) => {
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

	const response = await fetch(apiUrl);
	const data = await response.json();

	return data;
};

export const findCountryByRegion = async () => {
	// TODO implement
};
