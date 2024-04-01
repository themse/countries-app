export function filterBy<TData extends Record<string, unknown>, TField extends keyof TData>(
	data: TData[],
	fieldName: TField,
	searchValue: string,
) {
	return data.filter((item) => {
		const currentValue = item[fieldName];

		if (typeof currentValue !== 'string') return false;

		return currentValue.toLowerCase().includes(searchValue.toLowerCase());
	});
}
