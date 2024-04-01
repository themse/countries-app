import { ButtonHTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = tv({
	base: 'whitespace-nowrap rounded-md text-sm font-medium shadow-md shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'focus-visible:ring-gray-900/20 dark:bg-gray-700',
		},
		size: {
			default: 'h-10 px-4 py-2',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

type Props = {
	asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export const Button = ({ className, variant, size, asChild = false, ...props }: Props) => {
	const Comp = asChild ? Slot : 'button';

	return <Comp className={buttonVariants({ variant, size, className })} {...props} />;
};
