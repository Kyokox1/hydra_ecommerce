export const currencyFormatter = ({ currency = 'USD', value }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		minimumFractionDigits: 0,
		currency
	});
	return formatter.format(value);
};
