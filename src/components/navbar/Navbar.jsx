import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Navbar = () => {
	const [color, setColor] = useState('transparent');

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor('rgba(0, 0, 0, 0.616)');
			} else {
				setColor('transparent');
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);
	return (
		<header style={{ backgroundColor: `${color}` }} className={styles.header}>
			<div className="container">
				<div className={styles.box}>
					<div className={styles.logo}>
						<FaBookOpen style={{ width: '40px', height: '35px' }} />
						<p>
							Finance<span className={styles.text}>Ledger</span>
						</p>
					</div>
					<nav>
						<ul className={styles.list}>
							<li className={styles.item}>
								<Link to="home" smooth={true} duration={500}>
									Home
								</Link>
							</li>
							<li className={styles.item}>
              <Link to="about" smooth={true} duration={500}>
              About
								</Link>
                </li>
							<li className={styles.item}><Link to="casses" smooth={true} duration={500}>
              Casses
								</Link></li>
							<li className={styles.item}><Link to="blog" smooth={true} duration={500}>
              Blog
								</Link></li>
							<li className={styles.item}><Link to="contact" smooth={true} duration={500}>
              Contact
								</Link></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
