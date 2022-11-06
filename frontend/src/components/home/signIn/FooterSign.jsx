import { BsFillTelephoneFill } from 'react-icons/bs';

const FooterSign = () => {
	return (
		<div className='footerSign'>
			<h6 className='text-center'>
				<span className='d-flex justify-content-end'>
					<BsFillTelephoneFill />
					<span>
						CONTACTANOS
						<br />
						080012345
					</span>
				</span>
			</h6>
		</div>
	);
};

export default FooterSign;
