import React from 'react'
import styles from './Blog.module.scss'
import blog from '../../aseets/images/home/blog.jpg'

const Blog = () => {
  return (
    <section className={styles.section}>
			<div>
				<img className={styles.img} src={blog} alt="people" />
			</div>
			<div className="container">
				<div className={styles.description}>
					<p className={styles.text}>April 16 2020</p>
					<h1 className={styles.title}>Blog Post One</h1>
					<p className={styles.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
					</p>
					<button className={styles.button}>Read Our Blog</button>
				</div>
			</div>
		</section>
  )
}

export default Blog
