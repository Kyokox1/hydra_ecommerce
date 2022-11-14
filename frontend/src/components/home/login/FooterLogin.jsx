import { BiWorld } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const FooterLogin = () => {
	return (
		<div className='container footerLogin'>
			<div className='row'>
				<div className='col-6 col-sm-6 col-md-6 p-0 d-flex flex-column py-2 px-4'>
					<span className='d-flex align-items-center'>
						<BiWorld /> NAVEGACION
					</span>
					<span>Inicio</span>
					<span>Contacto</span>
					<span>Productos</span>
				</div>
				<div className='col-6 col-sm-6 col-md-6 p-0 py-2 px-4'>
					<span className='d-flex align-items-center'>
						<BsFillTelephoneFill /> CONTACTANOS
					</span>

					<span>0800-12345</span>
				</div>
			</div>
		</div>
	);
};

export default FooterLogin;
