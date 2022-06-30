import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <div>
    <p>1foo={process.env.foo}</p>
    <p>2hello={process.env.hello}</p>
    <p>3hello1={process.env.hello1}</p>
    <p>4aaa={process.env.aaa}</p>
  </div>
}
