import { InputHTMLAttributes, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

const inputVariants = tv({
	base: 'w-full rounded-md border-none px-4 py-5 text-sm font-medium shadow-md shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700',
});

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(({ className, type, ...props }, ref) => {
	return <input type={type} className={inputVariants({ className })} ref={ref} {...props} />;
});

Input.displayName = 'Input';
