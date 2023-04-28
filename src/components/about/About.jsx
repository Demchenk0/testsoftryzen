import React from 'react';
import styles from '../about/About.module.scss';
const About = () => {
	return (
		<section className={styles.section}>
			<div className={styles.box} >
				<div className={styles.img}>
				</div>
				<div className={styles.description}>
					<p className={styles.text}>What you are looking for</p>
					<h1 className={styles.title}>We provide bespoke solutions</h1>
					<p className={styles.text}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
						ipsum dignissimos quae laudantium asperiores nam aliquid impedit
						harum illum dolore explicabo ab dolores itaque rerum temporibus
						doloribus iste maiores deleniti?
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</section>
	);
};

export default About;
