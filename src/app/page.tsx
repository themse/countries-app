import 'server-only';

import { Container } from '@/ui/components/templates/Container';
import { PageProps } from '@/types/app';

export default function Home({}: PageProps) {
	return (
		<Container>
			<p className="font-inter">Hello World</p>
			<p>Hello World</p>
		</Container>
	);
}
