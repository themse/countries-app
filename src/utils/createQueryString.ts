export function createQueryString(
	searchParams: URLSearchParams,
	payload: { name: string; value: string },
) {
	const params = new URLSearchParams(searchParams.toString());
	const { name, value } = payload;

	if (value.trim().length === 0) {
		params.delete(name);
	} else {
		params.set(name, value);
	}

	return params.toString();
}
