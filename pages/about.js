import fetch from 'node-fetch'
import {useEffect,useState} from 'react'

function About({ posts }) {

  const [posts2,changePost] = useState({
    hello:'假数据2'
  })
  useEffect(()=>{
    // let main = async()=>{
    //   const res = await fetch('http://127.0.0.1:3001/aaa')
    //   const resObj = await res.json()
    //   changePost(resObj)
    // }
    // main()
  },[])
  return (
    <div>
      <div>
        StaticProps:{posts.hello}
      </div>
      <div>
        动态数据:{posts2.hello}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  
  const posts = {
    hello:'mock数据'
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


export default About