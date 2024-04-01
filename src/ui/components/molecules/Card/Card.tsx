import { ComponentProps, PropsWithChildren } from 'react';
import Image from 'next/image';
import { tv } from 'tailwind-variants';

const cardVariants = tv({
	slots: {
		wrapper: 'min-w-64 overflow-hidden rounded-md shadow-sm shadow-black/30 dark:bg-gray-700',
		title: 'text-base font-bold',
		image: 'w-full object-cover object-center',
		content: 'flex flex-col gap-y-3 px-5 py-8',
	},
});

type Props = PropsWithChildren<{
	image?: string | ComponentProps<typeof Image>['src'];
	title: string;
	className?: string;
}>;

export const Card = ({ className, title, image, children }: Props) => {
	const styles = cardVariants({ className });

	return (
		<div className={styles.wrapper()}>
			{image && (
				<Image src={image} alt={title} width={256} height={120} className={styles.image()} />
			)}
			<div className={styles.content()}>
				<h2 className={styles.title()}>{title}</h2>
				{children}
			</div>
		</div>
	);
};
