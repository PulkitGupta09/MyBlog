import React from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'

// Step 1 : Collect all the files from blogdata directory.
// Step 2 : Iterate through them and display them.

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allblogs)
  
  
  return (
    <div className={`${styles.blogs} ${styles.uppercontainer}`}>
    <h1>Popular Blogs</h1>
    {
      blogs.map((blogitem)=>{
        return <div className={styles.blogitem} key = {blogitem.slug}>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h2>{blogitem.title}</h2></Link>
        <p className={styles.para}>{blogitem.metadesc.substr(0,150)}</p>
      </div> 
      })
    }
  </div>
  )
}



export async function getStaticProps(context) {
  const fs = require('fs');
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allblogs = [];
  // res.status(200).json(data);
  for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item);
      myfile = await fs.promises.readFile("blogdata/" + item, 'utf8')
      // console.log(myfile);
      allblogs.push(JSON.parse(myfile));
  }
  return {
    props: {allblogs}, // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allblogs = await data.json();
//   return {
//     props: {allblogs}, // will be passed to the page component as props
//   }
// }

export default Blog