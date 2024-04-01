import 'server-only';

import { Container } from '@/ui/components/templates/Container';
import { PageProps } from '@/types/app';
import { Toolbar } from './_components/Toolbar';

export default function Home({}: PageProps) {
	return (
		<Container>
			<div className="py-11">
				<Toolbar />
			</div>
		</Container>
	);
}
