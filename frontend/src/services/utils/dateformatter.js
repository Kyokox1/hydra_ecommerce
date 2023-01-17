export const dateFormatter = (date) => {
	const options = {
		weekday: 'long',
		month: 'numeric',
		day: 'numeric',
		hour12: true
	};

	const formatter = new Intl.DateTimeFormat('es-AR', options).format(date); // day 9/8

	return formatter;
};
