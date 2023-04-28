import React from 'react';
import styles from './Hero.module.scss';
import { FaAngleRight } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.hero}>
					<h1 className={styles.title}>The Sky Is The Limit</h1>
					<h2 className={styles.text}>
						We provide world class financial assistance
					</h2>

					<button className={styles.button} type="button">
						<FaAngleRight />
						Read More
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
