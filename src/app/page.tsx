import 'server-only';

import { Container } from '@/ui/components/templates/Container';
import { PageProps } from '@/types/app';

export default function Home({}: PageProps) {
	return (
		<Container>
			<h2>Hello World</h2>
			<p>Hello World</p>
		</Container>
	);
}
