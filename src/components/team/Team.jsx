import React from 'react';
import styles from './Team.module.scss';
import { TeamList } from './TeamList';
const Team = () => {
	return (
		<section>
			<div className="container">
				<div className={styles.box}>
					<div className={styles.description}>
						<p className={styles.text}>Who we are</p>
						<h1 className={styles.title}>Our Professional Team</h1>
						<p className={styles.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto, sapiente!
						</p>
					</div>
					<ul className={styles.boxItem}>
						{TeamList.map((el, idx) => (
							<li key={idx}>
								<img className={styles.img} src={el.image} alt="team" />
								<p className={styles.name}>{el.name}</p>
								<p className={styles.text}>{el.position}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Team;
