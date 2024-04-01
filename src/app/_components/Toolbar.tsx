'use client';

import { ElementRef, useCallback, useEffect, useRef, use } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/ui/components/molecules/Select';
import { createQueryString } from '@/utils/createQueryString';
import { SearchInput } from '@/ui/components/molecules/SearchInput';

type Props = {
	regionListPromise: Promise<string[]>;
};

export const Toolbar = ({ regionListPromise }: Props) => {
	const inputRef = useRef<ElementRef<'input'>>(null);

	const regionList = use(regionListPromise);

	// Routing
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const createQueryStringNext = useCallback(createQueryString, [searchParams]);

	const changeSearchParams = (fieldName: 'search' | 'region', value: string) => {
		router.push(`${pathname}?${createQueryStringNext(searchParams, { name: fieldName, value })}`);
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
			<SearchInput
				className="sm:w-1/2 md:w-1/3"
				ref={inputRef}
				inputProps={{
					placeholder: 'Search for a country...',
					onChange: (event) => changeSearchParams('search', event.target.value),
				}}
			/>

			<Select onValueChange={(value) => changeSearchParams('region', value)}>
				<SelectTrigger className="w-64">
					<SelectValue placeholder="Filter by Region" />
				</SelectTrigger>
				<SelectContent className="w-64">
					{regionList.map((label) => (
						<SelectItem value={label.toLowerCase()} key={label}>
							{label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
