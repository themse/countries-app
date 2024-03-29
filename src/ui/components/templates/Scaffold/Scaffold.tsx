import { ReactNode, PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const scaffoldVariants = tv({
	slots: {
		base: 'relative flex min-h-screen min-w-[320px] flex-col justify-between',
		content: 'flex-1',
		header: 'w-full',
	},
	variants: {
		headerPosition: {
			static: {
				header: 'static',
			},
			fixed: {
				header: 'fixed top-0 z-10',
			},
			sticky: {
				header: 'sticky top-0 z-10',
			},
		},
	},
	defaultVariants: {
		headerPosition: 'static',
	},
});

type Props = Partial<{
	header: ReactNode;
	footer: ReactNode;
}> &
	VariantProps<typeof scaffoldVariants>;

export const TemplateScaffold = ({
	header,
	footer,
	children,
	headerPosition,
}: Readonly<PropsWithChildren<Props>>) => {
	const variants = scaffoldVariants({ headerPosition });

	return (
		<div className={variants.base()}>
			<header className={variants.header()}>{header}</header>

			<main className={variants.content()}>{children}</main>

			{footer}
		</div>
	);
};
