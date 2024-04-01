'use client';

import Link from 'next/link';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { APP_BRAND_NAME } from '@/common/configs/app';
import { Button } from '@/ui/components/atoms/Button';
import { Header } from '@/ui/components/molecules/Header';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { Container } from '@/ui/components/templates/Container';

type Props = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
	return (
		<html>
			<body>
				<ThemeProvider>
					<TemplateScaffold header={<Header title={APP_BRAND_NAME} />}>
						<Container>
							<div className="flex flex-col gap-y-4 py-6">
								<h2 className="text-center text-3xl">Something went wrong!</h2>
								<div className="flex items-center justify-center gap-x-4">
									<Button onClick={() => reset()}>Try again</Button>
									<Button asChild>
										<Link href="/">Back home</Link>
									</Button>
								</div>
							</div>
						</Container>
					</TemplateScaffold>
				</ThemeProvider>
			</body>
		</html>
	);
}
