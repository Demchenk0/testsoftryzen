import React from 'react';
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import error from '../../aseets/images/form/worning.svg';
import queryString from 'query-string';


const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

  
	return (
		<section name="contact" className={styles.contact}>
			<div className={styles.box}>
				<div className={styles.img}></div>
				<div className={styles.boxForm}>
					<p className={styles.callback}>Request Callback</p>
					<form
						name="contact"
						className={styles.form}
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(data => {
    const encodedData = queryString.stringify({
        'form-name': 'contact',
        ...data
    });

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData
    }).then(() => alert('/thank-you/'));
})}

            
           
						// onSubmit={handleSubmit(data => {
						// 	const formData = new FormData();
						// 	formData.append('name', data.name);
						// 	formData.append('email', data.email);

						// 	fetch('/', {
						// 		method: 'POST',
						// 		headers: {
						// 			'Content-Type': 'application/x-www-form-urlencoded',
						// 		},
						// 		body: new URLSearchParams(formData).toString(),
						// 	}).then(() => alert('/thank-you/'));
						// })}
					>
						<input type="hidden" name="form-name" value="contact" />
						<input
							name="name"
							className={styles.input}
							type="text"
							placeholder="Enter your name"
							{...register('name')}
						/>
						<input
							name="email"
							className={styles.input}
							type="email"
							placeholder="Enter email*"
							{...register('email', { required: true })}
						/>
						{errors.email && (
							<div className={styles.error}>
								<img src={error} alt="error" />
								<p>This is a required field</p>
							</div>
						)}
						<button className={styles.button} type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Form;
