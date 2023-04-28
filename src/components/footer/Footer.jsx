import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';
const Footer = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.icon}>
					<FaFacebook size={35} style={{ color: 'white' }} />
					<FaTwitter size={35} style={{ color: 'white' }} />
					<FaYoutube size={35} style={{ color: 'white' }} />
					<FaLinkedin size={35} style={{ color: 'white' }} />
				</div>
          <p className={styles.copirate}>Copyright © 2021 - FinanceLedger</p>
			</div>
		</section>
	);
};

export default Footer;
