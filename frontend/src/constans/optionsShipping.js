import { dateFormatter } from '~/services/utils/dateformatter';

const currentDate = new Date();

// ? aumentamos los días del objeto Date de esta manera
const prevDate = new Date().setDate(currentDate.getDate() + 1);
const futureDate = new Date().setDate(currentDate.getDate() + 3);

// ? formateamos la fecha
const prevDateFormat = dateFormatter(prevDate); // day 9/8
const futureDateFormat = dateFormatter(futureDate);

export const optionsShipping = [
	{
		header: 'Envio a domicilio',
		textHeader: 'Andreani Estandar',
		textBody: `Llega entre el ${prevDateFormat} y el ${futureDateFormat}`,
		price: 1300,
		value: '1'
	},
	{
		header: 'Retirar por punto',
		textHeader: 'Punto de Retiro',
		textBody: `Llega entre el ${prevDateFormat} y el ${futureDateFormat}`,
		price: 1000,
		value: '2'
	}
];
