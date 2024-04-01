import Link from 'next/link';

import { Button } from '@/ui/components/atoms/Button';
import { Country } from '@/services/api/countries/types';

type Props = {
	borders: Country['borders'];
};

export const CountryBorders = ({ borders }: Props) => {
	return (
		<div className="flex flex-col gap-y-2">
			<p className="whitespace-nowrap">Border Countries:</p>
			<div className="flex flex-wrap gap-2">
				{borders.map((border) => (
					<Button asChild key={border.slug}>
						<Link href={`/${border.slug}`}>{border.name}</Link>
					</Button>
				))}
			</div>
		</div>
	);
};
