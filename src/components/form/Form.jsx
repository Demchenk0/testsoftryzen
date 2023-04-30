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

  const onSubmit = (data) => {
    console.log(data);
    // Здесь вы можете отправить данные на сервер или выполнить другие действия по вашему усмотрению.
  };

  const handleNetlifySubmit = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit)(event);
    const form = event.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    }).then(() => console.log('Form submitted successfully'));
  };
	return (
		<section name="contact" className={styles.contact}>
			<div className={styles.box}>
				<div className={styles.img}></div>
				<div className={styles.boxForm}>
					<p className={styles.callback}>Request Callback</p>
					<form
          name="contact"
						className={styles.form}
						data-netlify="true"
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
						// 	})
						// 		.then(() => alert('/thank-you/'))
						// })}
            onSubmit={handleNetlifySubmit}
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
