import React from 'react';
import styles from './Blog.module.scss';

const Blog = () => {
	return (
		<section className={styles.section}>
			<div className={styles.box}>
				<div className={styles.img}></div>
				<div className={styles.description}>
					<p className={styles.text}>April 16 2020</p>
					<h1 className={styles.title}>Blog Post One</h1>
					<p className={styles.text}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
						ipsum dignissimos quae laudantium asperiores nam aliquid impedit
						harum illum dolore explicabo ab dolores itaque rerum temporibus
						doloribus iste maiores deleniti?
					</p>
					<button className={styles.button}>Read Our Blog</button>
				</div>
			</div>
		</section>
	);
};

export default Blog;
