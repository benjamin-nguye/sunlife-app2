import styles from '../styles/header.module.css'
import Head from 'next/Head'
import Link from 'next/Link'

export default function Header() {
    return (
    <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/d4c7de301e.js" crossorigin="anonymous"></script>
        </Head>
        <div className={styles.header}>
            <Link href="/" passhref>
                <a id={styles.headerLink}><div className={styles.myfirstfinance}>myFirstFinance</div></a>
            </Link>
            <p>
                <i className="fa-brands fa-github"></i>
            </p>
        </div>
       
    
    </>
    );
    
  }