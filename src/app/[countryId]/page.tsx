import 'server-only';
import { Suspense } from 'react';
import Link from 'next/link';

import { Container } from '@/ui/components/templates/Container';
import { Button } from '@/ui/components/atoms/Button';
import { MoveLeftIcon } from '@/ui/components/atoms/icons';
import { PageProps } from '@/types/app';
import { revertSlug } from '@/utils/revertSlug';
import { Loader } from '@/ui/components/atoms/Loader';
import { CountryDetails } from './_components/CountryDetails';

export default async function Country({ params }: PageProps<{ countryId: string }>) {
	const { countryId } = params;

	return (
		<Container>
			<div className="flex flex-col gap-y-24 py-16">
				<Button asChild className="flex items-center gap-x-2 self-start px-10">
					<Link href="/">
						<MoveLeftIcon />
						<span>Back</span>
					</Link>
				</Button>

				<Suspense fallback={<Loader className="fixed bottom-0 left-0 right-0 top-0 h-screen" />}>
					<CountryDetails countryName={revertSlug(countryId)} />
				</Suspense>
			</div>
		</Container>
	);
}
