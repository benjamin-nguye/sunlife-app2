// this is the user input page
import Link from 'next/Link'
import styles from '../styles/inputpage.module.css'


export default function Home() {
  return (
    <>
    <div className={styles.body}>

      <div className={styles.welcomeBox}>
        <div className={styles.welcomeMessage}>Welcome to your First Finance Lesson!</div>
        <div className={styles.prompt}>
          Would you like to enter your information?
        </div>
        <div className={styles.buttons}>
          <Link href="/form" passhref>
            <button id={styles.yesbutton}>Yes, enter financial information for personalized lesson.</button>
          </Link>
          <Link href="/form/results/noauth" passhref>
            <button id={styles.nobutton}>No, continue to lesson without financial information.</button>
          </Link>
        </div>
        
      </div>

    </div>
      
      


    </>
  
  );
}
