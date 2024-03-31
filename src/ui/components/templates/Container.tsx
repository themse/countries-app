import { PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const containerVariants = tv({
	base: 'w-full px-6',
	variants: {
		variant: {
			basic: 'container',
			fluid: 'xl:container',
		},
	},
	defaultVariants: {
		variant: 'fluid',
	},
});

type Props = PropsWithChildren<{
	className?: string;
}> &
	VariantProps<typeof containerVariants>;

export const Container = ({ children, variant, className }: Readonly<Props>) => {
	return <div className={containerVariants({ variant, className })}>{children}</div>;
};
