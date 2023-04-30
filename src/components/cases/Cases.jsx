import React from 'react';
import styles from './Cases.module.scss';
import { CasesSlider } from './CasesSlider';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;



const Cases = () => {
	return (
		<section>
			<div name="casses" className="container">
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
						{CasesSlider.map((image, idx) => (
							<a href={image.path} data-lightbox="set" data-title={image.text}>
              <img
								key={idx}
								className={styles.img} 
								src={image.path}
								alt="business"
							/>
              </a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cases;
