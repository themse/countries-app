export function revertSlug(slug: string): string {
	const decodedSlug = decodeURIComponent(slug);

	return decodedSlug
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}
