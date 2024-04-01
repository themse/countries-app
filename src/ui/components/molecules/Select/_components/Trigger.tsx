import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { tv } from 'tailwind-variants';

import { ChevronDown } from '@/ui/components/atoms/icons';

const triggerVariants = tv({
	slots: {
		wrapper:
			'flex w-full items-center justify-between rounded-md px-4 py-5 text-sm shadow-sm shadow-black/30 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 [&>span]:line-clamp-1',
		icon: 'h-5 w-5',
	},
});

type Props = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;

export const SelectTrigger = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, Props>(
	({ className, children, ...props }, ref) => {
		const { wrapper, icon } = triggerVariants();

		return (
			<SelectPrimitive.Trigger ref={ref} className={wrapper({ className })} {...props}>
				{children}
				<SelectPrimitive.Icon asChild>
					<ChevronDown className={icon()} />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
		);
	},
);

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
