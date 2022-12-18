import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const navbar = () => {
  return (
      <div>
        {/* ******************************************Navbar***************************************** */}
        <nav className={styles.mainnav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/blog"><li>blog</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
  
      {/* ******************************************Navbar***************************************** */}
      </div>
  )
}

export default navbar