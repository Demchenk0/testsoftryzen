import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useMediaQuery } from "react-responsive";
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

	const isMobile = useMediaQuery({ maxWidth: 767.9 });
	return (
		<header style={{ backgroundColor: `${color}` }} className={styles.header}>
			<div className="container">
				<div className={styles.box}>
					<Link className={styles.logo} href='/'>
						<FaBookOpen style={{ width: '40px', height: '35px' }} />
						<p>
							Finance<span className={styles.text}>Ledger</span>
						</p>
					</Link>
					<nav>
						<ul className={styles.list}>
							<li className={styles.item}>
								<Link to="home"  offset={isMobile ? -120 : -70} smooth={true} duration={500}>
									Home
								</Link>
							</li>
							<li className={styles.item}>
								<Link to="about" offset={isMobile ? -120 : -70} smooth={true} duration={500}>
									About
								</Link>
							</li>
							<li className={styles.item}>
								<Link to="casses" offset={isMobile ? -120 : -70} smooth={true} duration={500}>
									Casses
								</Link>
							</li>
							<li className={styles.item}>
								<Link to="blog" offset={isMobile ? -120 : -70} smooth={true} duration={500}>
									Blog
								</Link>
							</li>
							<li className={styles.item}>
								<Link to="contact" offset={isMobile ? -120 : -70} smooth={true} duration={500}>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
