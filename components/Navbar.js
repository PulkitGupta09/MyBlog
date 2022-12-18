import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const navbar = () => {
  
  return (
      <div>
        {/* ******************************************Navbar***************************************** */}
    <header class={styles.header}>
      <a class={styles.logo} href=".page-top">WordlyThoughts</a>
      <input class={styles.menubtn} type="checkbox" id="menu-btn" />
      <label class={styles.menuicon} for="menu-btn"><span class={styles.navicon}></span></label>
      <ul class={styles.menu}>
        <Link href="/" ><li class={`${styles.link} ${styles.linktheme} ${styles.linkarrow}`}>HOME</li></Link>
        <Link href="/about"><li class={`${styles.link} ${styles.linktheme} ${styles.linkarrow}`}>BLOG</li></Link>
        <Link href="/blog" ><li class={`${styles.link} ${styles.linktheme} ${styles.linkarrow}`}>ABOUT US</li></Link>
        <Link href="/contact" ><li class={`${styles.link} ${styles.linktheme} ${styles.linkarrow}`}>CONTACT</li></Link>
      </ul>
    </header>
      {/* ******************************************Navbar***************************************** */}
      </div>
  )
}

export default navbar