import { useState } from 'react';

import Modal from 'src/shared/components/utils/Modal';
import LogoBanner from 'src/components/login/LogoBanner';
import RegisterForm from 'src/components/login/RegisterForm';

const Signup = () => {
	const [error, setError] = useState<string | null>(null);

	return (
		<>
			<Modal onCancel={() => setError(null)} header='Signup error!' show={!!error} isError={!!error}>
				<p>{error}</p>
			</Modal>
			<div className='flex h-screen'>
				<div className='hidden lg:block lg:w-1/2'>
					<LogoBanner />
				</div>
				<div className='mx-4 flex flex-1 flex-col items-center justify-center p-4'>
					<RegisterForm handleError={error => setError(error)} />
				</div>
			</div>
		</>
	);
};

export default Signup;