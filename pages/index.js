import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <div>
    <p>foo={process.env.foo}</p>
    <p>hello={process.env.hello}</p>
    <p>hello1={process.env.hello1}</p>
    <p>aaa={process.env.aaa}</p>
  </div>
}
