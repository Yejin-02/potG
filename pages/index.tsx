import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Login from '../components/login'
import React from 'react'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>PotG</title>
        <meta name="description" content="potG login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/potg.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Login />
        <h2>여기부터 쓸데없음</h2>
        <Link className={styles.link} href={{pathname:`/main`}}>main</Link>
      </main>

    </>
  )
}