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

export type Country = {
	name: string;
	slug: string;
	nativeName: string;
	population: string;
	region: string;
	subregion: string;
	capital: string;
	topLevelDomain: string;
	currencies: string;
	languages: string;
	borders: Pick<Country, 'name' | 'slug'>[];
	flagImg: { src: string; alt: string };
};

export type CountryItem = Pick<
	Country,
	'name' | 'slug' | 'population' | 'region' | 'capital' | 'flagImg'
>;
