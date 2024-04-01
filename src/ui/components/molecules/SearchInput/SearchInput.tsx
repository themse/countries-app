import { ComponentProps, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

import { Input } from '@/ui/components/atoms/Input';
import { SearchIcon } from '@/ui/components/atoms/icons';

const searchInputVariants = tv({
	slots: {
		wrapper: 'relative w-full',
		icon: 'absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 opacity-40',
		input: 'pl-16',
	},
});

type Props = {
	className?: string;
	inputProps: ComponentProps<typeof Input>;
};

export const SearchInput = forwardRef<HTMLInputElement, Props>(({ className, inputProps }, ref) => {
	const { wrapper, icon, input } = searchInputVariants();

	return (
		<div className={wrapper({ className })}>
			<SearchIcon className={icon()} />
			<Input {...inputProps} ref={ref} type="text" className={input()} />
		</div>
	);
});

SearchInput.displayName = 'SearchInput';
