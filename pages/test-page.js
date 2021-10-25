import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function testPage(){
    return(
        <>
            <Head>
                <title>Test Deployment</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Test Deployment Vercel dan Heroku
                </h1>
            </main>
        </>
    )
}