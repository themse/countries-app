import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { tv } from 'tailwind-variants';

const itemVariants = tv({
	base: 'relative flex w-full cursor-default select-none items-center px-5 py-3 text-sm outline-none focus:bg-gray-700/30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800',
});

type Props = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export const SelectItem = forwardRef<ElementRef<typeof SelectPrimitive.Item>, Props>(
	({ className, children, ...props }, ref) => (
		<SelectPrimitive.Item ref={ref} className={itemVariants({ className })} {...props}>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	),
);

SelectItem.displayName = SelectPrimitive.Item.displayName;
