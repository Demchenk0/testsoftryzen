import React from 'react';
import styles from './Navbar.module.scss';
import { FaBookOpen } from 'react-icons/fa';
const Navbar = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.box}>
					<div className={styles.logo}>
						<FaBookOpen style={{ width: '40px', height: '35px' }} />
						<p>
							Finance<span className={styles.text}>Ledger</span>
						</p>
					</div>
					<nav>
						<ul className={styles.list}>
							<li className={styles.item}>Home</li>
							<li className={styles.item}>About</li>
							<li className={styles.item}>Casses</li>
							<li className={styles.item}>Blog</li>
							<li className={styles.item}>Contact</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
