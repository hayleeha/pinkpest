import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from "../components/Form.js";

const HomePage = () => {
	return (
		<div className={styles.mainWrapper}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Pink Pest</a>
				</h1>
				<h3 className={styles.homeSubtitle}>Type an address in below and we will tell you if it is valid or not</h3>
				<Form/>
			</main>

		</div>
	)
}

export default HomePage;