import 'server-only';

import { Container } from '@/ui/components/templates/Container';
import { PageProps } from '@/types/app';

// TODO implement
export default function Country({ params }: PageProps<{ countryId: string }>) {
	const { countryId } = params;

	return (
		<Container>
			<p>{countryId}</p>
		</Container>
	);
}
