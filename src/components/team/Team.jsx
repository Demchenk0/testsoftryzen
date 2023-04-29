import React from 'react';
import styles from './Team.module.scss';
import { TeamList } from './TeamList';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
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
								<div className={styles.boxIcon}>
									<div className={styles.icon}>
										<FaFacebook  className={styles.iconStyles} />
										<FaTwitter className={styles.iconStyles} />
										<FaYoutube  className={styles.iconStyles} />
										<FaLinkedin  className={styles.iconStyles} />
                    
									</div>
									<img className={styles.img} src={el.image} alt="team" />
								</div>
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
