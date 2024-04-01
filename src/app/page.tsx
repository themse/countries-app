import 'server-only';
import { Suspense } from 'react';

import { Container } from '@/ui/components/templates/Container';
import { Loader } from '@/ui/components/atoms/Loader';
import { PageProps } from '@/types/app';
import { Toolbar } from './_components/Toolbar';
import { CountryList } from './_components/CountryList';

export default function Home({}: PageProps) {
	return (
		<Container>
			<div className="flex flex-col gap-y-8 py-16">
				<Toolbar />
				<Suspense fallback={<Loader />}>
					<CountryList />
				</Suspense>
			</div>
		</Container>
	);
}
