// Data from API
export type RawCountry = {
	name: {
		common: string;
		nativeName: {
			[key: string]: {
				common: string;
			};
		};
	};
	tld: string[];
	cca3: string;
	currencies: {
		[key: string]: {
			name: string;
		};
	};
	capital: string[];
	region: string;
	subregion: string;
	languages: {
		[key: string]: string;
	};
	borders: string[];
	population: number;
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
};
