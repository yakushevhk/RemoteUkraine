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

      <main className={styles.main}>
      <Link href="/">
      <Image src="/u.png" alt="RemoteUkraine" width={40} height={40} />
      </Link>
        <h1 className={styles.title}>
          Remote<a>Ukraine</a>
        </h1>

        <p className={styles.description}>
        We have collected the main categories that are available, you are welcome :) {' '}
          <br></br><br></br><code className={styles.code}>Thats our skills</code>
        </p>
        


       <div className={styles.list}>
           <h4>🖼️ Design UX/UI</h4>
           <h4>💻 Web3 Dev.</h4>
           <h4>💻 Blockchain Dev.</h4>
           <h4>💻 IOS/Android Dev.</h4>
           <h4>🎯 Social Media Marketers</h4>
           <h4>💻 HTML5 Dev.</h4>
           <h4>💻 Node.js Dev.</h4>
           <h4>🖼️ Logo Design</h4>
           <h4>🖼️ Animation</h4>
           <h4>🖼️ Illustrators</h4>
           <h4>🖼️ Photo Editors</h4>
           <h4>🖼️ Motion Graphics</h4>
           <h4>🎯 Instagram Freelancers</h4>
           <h4>🎯 Lead Generation Experts</h4>
           <h4>🎯 SEO Experts</h4>
           <h4>🎯 Facebook Marketers</h4>
           <h4>🎯 Email Marketers</h4>
           <h4>🎯 Content Writers</h4>
           <h4>🎯 Article Writers</h4>
           <h4>🧾 Translators</h4>
           <h4>🎯 SEO Writers</h4>
           <h4>🎯 Internet Researchers</h4>
           <h4>🧾 Virtual Assistants</h4>
           <h4>🧾 Business Analyst</h4>
           <h4>🧾 e-Learning Specialists</h4>
           <h4>🧾 Mathematicians</h4>
           <h3>🌍 and more</h3>
       </div>

      

         



     
      </main>

      <footer className={styles.footer}>
        <a
         
          target="_blank"
          rel="noopener noreferrer"
        >
          2022{' '}
          
        </a>
      </footer>
    </div>
  )
}
