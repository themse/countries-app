import { tv } from 'tailwind-variants';

const loaderVariants = tv({
	slots: {
		wrapper: 'flex animate-ping items-center justify-center gap-x-2 duration-1000',
		item: 'h-5 w-5 rounded-full bg-gray-700 dark:bg-white',
	},
});

export const Loader = () => {
	const { wrapper, item } = loaderVariants();

	return (
		<div className={wrapper()}>
			<div className={item()} />
			<div className={item()} />
			<div className={item()} />
		</div>
	);
};
