import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { tv } from 'tailwind-variants';

const contentVariants = tv({
	base: 'relative z-50 min-w-[8rem] overflow-hidden rounded-md bg-white shadow-md shadow-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-gray-700',
	variants: {
		position: {
			popper:
				'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
			'item-aligned': '',
		},
	},
});

type Props = ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;

export const SelectContent = forwardRef<ElementRef<typeof SelectPrimitive.Content>, Props>(
	({ className, children, position = 'popper', ...props }, ref) => (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				ref={ref}
				className={contentVariants({ position, className })}
				position={position}
				{...props}
			>
				{children}
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	),
);

SelectContent.displayName = SelectPrimitive.Content.displayName;
