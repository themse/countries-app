import 'server-only';
import { Suspense } from 'react';

import { Container } from '@/ui/components/templates/Container';
import { Loader } from '@/ui/components/atoms/Loader';
import { getAllRegions } from '@/services/api/countries';
import { PageProps } from '@/types/app';
import { Toolbar } from './_components/Toolbar';
import { CountryList } from './_components/CountryList';

export default function Home({ searchParams }: PageProps) {
	const regionListPromise = getAllRegions();

	return (
		<Container>
			<div className="flex flex-col gap-y-8 py-16">
				<Suspense>
					<Toolbar regionListPromise={regionListPromise} />
				</Suspense>
				<Suspense fallback={<Loader className="fixed bottom-0 left-0 right-0 top-0 h-screen" />}>
					<CountryList filterCriteria={searchParams} />
				</Suspense>
			</div>
		</Container>
	);
}
