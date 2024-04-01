import { tv, VariantProps } from 'tailwind-variants';

const descriptionListVariants = tv({
	slots: {
		wrapper: 'text-sm leading-5',
		item: 'grid grid-cols-2 gap-4 py-px',
		label: 'font-bold',
		value: 'opacity-80',
	},
	variants: {
		showDivider: {
			true: {
				wrapper: 'divide-y divide-gray-100',
				item: 'px-4 py-6',
			},
		},
	},
});

type Props = {
	list: {
		label: string;
		value: string;
	}[];
	className?: string;
} & VariantProps<typeof descriptionListVariants>;

export const DescriptionList = ({ list, showDivider, className }: Props) => {
	const { wrapper, item, ...itemStyles } = descriptionListVariants({ showDivider, className });

	return (
		<dl className={wrapper()}>
			{list.map(({ label, value }) => (
				<div className={item()} key={label}>
					<dt className={itemStyles.label()}>{label}</dt>
					<dd className={itemStyles.value()}>{value}</dd>
				</div>
			))}
		</dl>
	);
};
