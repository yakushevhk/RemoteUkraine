import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import splitbee from '@splitbee/web';
splitbee.init()

export default function Home() {
  return (
    

<div className={styles.container}>
        <div className={styles.back}>
            <Link href="/">
        <Image src="/back.svg" alt="RemoteUkraine" width={26} height={26} style="color:black"/> 
        </Link>
       </div>
        
        
      <Head>
        <title>RemoteUkraine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main2}>
          
          
          
      <Link href="/">
      <Image src="/u.png" alt="RemoteUkraine" width={40} height={40} />
      </Link>
        <h1 className={styles.title}>
          Remote<a>Ukraine</a>
        </h1>

        <p className={styles.description}>
        TechnologyX OU
        Tallinn {' '}
          <br></br><br></br><code className={styles.code}>We need your support</code>
        </p>

       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
