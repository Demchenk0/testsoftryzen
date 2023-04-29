import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';
const Footer = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.iconBox}>
					<FaFacebook className={styles.icon} />
					<FaTwitter className={styles.icon} />
					<FaYoutube className={styles.icon} />
					<FaLinkedin className={styles.icon} />
				</div>
          <p className={styles.copirate}>Copyright © 2021 - FinanceLedger</p>
			</div>
		</section>
	);
};

export default Footer;
