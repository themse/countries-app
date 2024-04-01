import { RawCountry } from './types';

const formatter = new Intl.NumberFormat('en-US');

export class CountryAdapter {
	constructor(private readonly value: RawCountry) {}

	get population() {
		// 1000000 -> "1,000,000"
		return formatter.format(this.value.population);
	}

	get flagImg() {
		const src = this.value.flags.png;
		const alt = this.value.flags.alt;

		return { src, alt };
	}

	adaptList() {
		return {
			name: this.value.name.common,
			population: this.population,
			region: this.value.region,
			capital: this.value.capital.join(', '),
			flagImg: this.flagImg,
		};
	}
}
