'use client';

import { ElementRef, useCallback, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import { Input } from '@/ui/components/atoms/Input';
import { SearchIcon } from '@/ui/components/atoms/icons';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/ui/components/molecules/Select';
import { createQueryString } from '@/utils/createQueryString';

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
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const inputRef = useRef<ElementRef<'input'>>(null);

	const createQueryStringNext = useCallback(createQueryString, [searchParams]);

	const handleSearch = (value: string) => {
		router.push(`${pathname}?${createQueryStringNext(searchParams, { name: 'search', value })}`);
	};

	useEffect(() => {
		if (inputRef.current === null) return;

		const updatedSearch = searchParams.get('search');

		if (updatedSearch && updatedSearch.trim().length > 0) {
			inputRef.current.value = updatedSearch;
		}
	}, [searchParams]);

	return (
		<div className="flex flex-col justify-between gap-x-2 gap-y-8 sm:flex-row">
			<div className="relative w-full sm:w-1/2 md:w-1/3">
				<SearchIcon className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 opacity-40" />
				<Input
					ref={inputRef}
					type="text"
					className="pl-16"
					placeholder="Search for a country..."
					onChange={(event) => handleSearch(event.target.value)}
				/>
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
