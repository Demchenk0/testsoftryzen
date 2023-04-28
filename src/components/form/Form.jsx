import React from 'react';
import styles from './Form.module.scss';
import form from '../../aseets/images/home/contact.jpg';
const Form = () => {
	return (
		<section className={styles.contact}>
			<div>
				<img className={styles.img} src={form} alt="people" />
			</div>
			<div className="container">
				<div className={styles.boxForm}>
        <p className={styles.callback}>Request Callback</p>
				<form className={styles.form} action="">
					<input className={styles.input}
						type="text"
						placeholder="Enter your name"
					/>
					<input
          className={styles.input}
						type="email"
						placeholder="Enter email*"
					/>
          <button className={styles.button}>Send</button>
				</form>
        </div>
			</div>  
		</section>
	);
};

export default Form;
