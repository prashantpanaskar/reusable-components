export const filterArray = (arr, filters) => {
	if (!filters) return arr;

	const filterKeys = Object.keys(filters);
	const filterLen = filterKeys.length;
	return arr.filter((item) => {
		for (let i = 0; i < filterLen; i++) {
			const key = filterKeys[i];
			if (item[key] !== filters[key]) {
				return false;
			}
		}
		return true;
	});
};

export const stableSort = (array, comparator) => {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}