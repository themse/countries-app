import Link from 'next/link';

import { Container } from '@/ui/components/templates/Container';
import { ThemeToggle } from '@/ui/components/organisms/ThemeToggle';
import { Brand } from '@/ui/components/atoms/Brand';

type Props = {
	title: string;
};

export const Header = ({ title }: Props) => {
	return (
		<div className="flex min-h-20 w-full items-center bg-white py-2 shadow-lg shadow-black/20 dark:bg-gray-700">
			<Container>
				<div className="flex items-center justify-between gap-x-2">
					<Brand>
						<Link href="/">{title}</Link>
					</Brand>
					<ThemeToggle showLabel />
				</div>
			</Container>
		</div>
	);
};
