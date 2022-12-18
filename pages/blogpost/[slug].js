import React,{ useState } from 'react'
// import { useRouter } from 'next/router'
import styles from '../../styles/slu.module.css'
// import { useEffect } from 'react'

// Step 1 : Find the file corresponding to the slug.
// Step 2 : Populate them inside the page.

const Har = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
    // const router = useRouter()
    // const {slug} = router.query
    const [blog, setblog] = useState(props.myBlog);
    // useEffect(() => {
    //   if(!router.isReady) return;
    //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((Response)=>{
    //     return Response.json();
    //   }).then((data)=>{
    //     setBlog(data);
    //   })
    // }, [router.isReady])

  return <div className={styles.uppercontainer}> 
    <h1> {blog && blog.title} </h1>
    <hr />
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    
    
  </div>
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'how-to-learn-flask' } }, { params: { slug: 'how-to-learn-javascript' } } , { params: { slug: 'how-to-learn-nextjs' } }],
    fallback: true, // can also be true or 'blocking'
  }
}


export async function getStaticProps(context) {
  // console.log(context);
  const {slug} = context.params;
  // let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  // let x = await data.json();
  const fs = require('fs');
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  
  return {
    props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}
export default Har;


// export async function getServerSideProps(context) {
//   // console.log(context);
//   const {slug} = context.query;
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let x = await data.json();
//   return {
//     props: {x}, // will be passed to the page component as props
//   }
// }
