import Head from 'next/head'
import Link from 'next/link'
import mainStyles from '../styles/main.module.css'
import styles from '../styles/Home.module.css'
import Login from '../components/login'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>PotG</title>
        <meta name="description" content="potG login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/potg.ico" />
      </Head>
      <main className={mainStyles.main}>
        <Login />
      </main>

    </>
  )
}