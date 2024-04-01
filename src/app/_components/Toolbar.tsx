import { Input } from '@/ui/components/atoms/Input';
import { SearchIcon } from '@/ui/components/atoms/icons';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/ui/components/molecules/Select';

// TODO use fetched data
const mockedData = [
	{
		label: 'Africa',
		value: 'africa',
	},
	{
		label: 'America',
		value: 'america',
	},
	{
		label: 'Asia',
		value: 'Asia',
	},
	{
		label: 'Europe',
		value: 'europe',
	},
	{
		label: 'Oceania',
		value: 'oceania',
	},
];

export const Toolbar = () => {
	return (
		<div className="flex flex-col justify-between gap-x-2 gap-y-8 sm:flex-row">
			<div className="relative w-full sm:w-1/2 md:w-1/3">
				<SearchIcon className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 opacity-40" />
				<Input type="text" className="pl-16" placeholder="Search for a country..." />
			</div>

			<Select>
				<SelectTrigger className="w-64">
					<SelectValue placeholder="Filter by Region" />
				</SelectTrigger>
				<SelectContent className="w-64">
					{mockedData.map(({ label, value }) => (
						<SelectItem value={value} key={value}>
							{label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
