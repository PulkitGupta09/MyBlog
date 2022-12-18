import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {
          `
          h2{
            font-size: 32px;
          }
          `
        }
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.uppercontainer}>
        <h1 className={styles.title}>
          <span className="myspan">Hunting Coder</span>
        </h1>
        {/* <Image src="/homeimg.avif" alt='imagehere' className={styles.imagemain} width={236} height={156} /> */}
        <img src="/homeimg.avif" className={styles.imagemain} alt="imagehere" width={236} height156 />
        <p className={styles.description}>
         A blog for hunting coder by a hunting coder.
        </p>
        </div>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogitem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogitem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogitem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>

    </div>
  )
}
