import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        hello world by action runner {new Date().toISOString()}
        <p>
          foo={process.env.foo}
          <br />
          start_server={process.env.start_server}
        </p>
      </main>
    </div>
  )
}
