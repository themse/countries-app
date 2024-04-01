import { slugify } from '@/utils/slugify';
import { Country, CountryItem, RawCountry } from './types';

const formatter = new Intl.NumberFormat('en-US');

export class CountryAdapter {
	constructor(private readonly value: RawCountry) {}

	get slug() {
		return slugify(this.value.name.common);
	}

	get nativeName() {
		const [targetName] = Object.values(this.value.name.nativeName);

		return targetName?.common ?? this.value.name.common;
	}

	get population() {
		// 1000000 -> "1,000,000"
		return formatter.format(this.value.population);
	}

	get flagImg() {
		const src = this.value.flags.png;
		const alt = this.value.flags.alt;

		return { src, alt };
	}

	get currencies() {
		const currencyList = Object.values(this.value.currencies).map((item) => item.name);

		return currencyList.join(', ');
	}

	get languages() {
		const langList = Object.values(this.value.languages);

		return langList.join(', ');
	}

	adaptItem(): CountryItem {
		return {
			name: this.value.name.common,
			slug: this.slug,
			population: this.population,
			region: this.value.region,
			capital: this.value.capital.join(', '),
			flagImg: this.flagImg,
		};
	}

	adaptDetail(): Omit<Country, 'slug'> {
		return {
			name: this.value.name.common,
			nativeName: this.nativeName,
			population: this.population,
			region: this.value.region,
			subregion: this.value.subregion,
			capital: this.value.capital.join(', '),
			topLevelDomain: this.value.tld.join(', '),
			currencies: this.currencies,
			languages: this.languages,
			borders: [],
			flagImg: this.flagImg,
		};
	}

	adaptBorders(): Pick<Country, 'name' | 'slug'> {
		return {
			name: this.value.name.common,
			slug: this.slug,
		};
	}
}
