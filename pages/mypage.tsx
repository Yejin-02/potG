import Head from 'next/head'
import mainStyles from '../styles/main.module.css'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import List from '../components/myList'

export default function MyPage() {
    return(
      <>
        <Head>
          <title>PotG</title>
          <meta name="description" content="potG main" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/potg.ico" />
        </Head>
        <main className={mainStyles.main}>
          <Header/>
          <h3>회원정보</h3>
          <div className='userInfo'>
            <p>id: userID</p>
            <button>비밀번호 변경하기</button>
          </div>
          <br/>
          <h3>내 동승 정보</h3>
          <List />
        </main>
      </>
    )
}