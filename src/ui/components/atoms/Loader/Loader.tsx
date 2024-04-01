import { tv } from 'tailwind-variants';

const loaderVariants = tv({
	slots: {
		wrapper: 'flex animate-ping items-center justify-center gap-x-2 duration-1000',
		item: 'h-5 w-5 rounded-full bg-gray-700 dark:bg-white',
	},
});

type Props = {
	className?: string;
};

export const Loader = ({ className }: Props) => {
	const { wrapper, item } = loaderVariants();

	return (
		<div className={wrapper({ className })}>
			<div className={item()} />
			<div className={item()} />
			<div className={item()} />
		</div>
	);
};
