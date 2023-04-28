import React from 'react';
// import { useState } from 'react';
import styles from './Cases.module.scss';
// import { CasesSlider } from './CasesSlider';
// import Cases1 from '../../aseets/images/cases/cases1.jpg'
// import Cases2 from '../../aseets/images/cases/cases2.jpg'
// import Cases3 from '../../aseets/images/cases/cases3.jpg'
// import Cases4 from '../../aseets/images/cases/cases4.jpg'
// import Cases5 from '../../aseets/images/cases/cases5.jpg'
// import Cases6 from '../../aseets/images/cases/cases6.jpg'
import { CasesSlider } from './CasesSlider';

const Cases = ({ slides }) => {
	// const [current, setCurrent] = useState(0);
	// const length = slides.length;

	// const nextSlide = () => {
	// 	setCurrent(current === length - 1 ? 0 : current + 1);
	// };
	// const prevSlide = () => {
	// 	setCurrent(current === 0 ? length - 1 : current - 1);
	// };

	// if (!Array.isArray(slides) || slides.length <= 0) {
	// 	return null;
	// }
	return (
		<section>
			<div className="container">
				<div className={styles.box}>
					<div className={styles.description}>
						<p className={styles.text}>This is what we do</p>
						<h1 className={styles.title}>Business Cases</h1>
						<p className={styles.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto, sapiente!
						</p>
					</div>
					<div className={styles.boxItem}>
						{CasesSlider.map((img, idx) => (
							<img key={idx} className={styles.img} src={img} alt="business" />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cases;
