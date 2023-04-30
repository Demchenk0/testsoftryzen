import React from 'react';
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import error from '../../aseets/images/form/worning.svg';
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
						className={styles.form} data-netlify="true"
						onSubmit={handleSubmit(data => {
							if (!data.email) {
								alert('Email is required');
								return;
							}
						})}
					>
						<input
							className={styles.input}
							type="text"
							placeholder="Enter your name"
							{...register('name')}
						/>
						<input
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
