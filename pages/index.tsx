import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {useQuery} from '@apollo/client'
import WORK_QUERY from './work.graphql'

const Pill = (techStacks: [string]) => {

return techStacks.map((tech, index)=> <em key={index} className={styles.pill}>{tech}</em>)
}

const Work = (data: { consultants: any })=> {
  const {consultants} = data
  return consultants[0].work.map((job, index) => (
    <a href="https://nextjs.org/docs" className={styles.card} key={index}>
      <h2>{job.name} &rarr;</h2>
      <p>{job.description}</p>
      {Pill(job.technology)}
    </a>
  ))
}

export default function Home() {

  const {data, loading, error} = useQuery(WORK_QUERY,{
    variables: {email: 'mjulio.developer@gmail.com'}
  })

  if(error) {
    return <p>{error}</p>
  }
  if(loading) {
    return <p>Loading...</p>
  }

  console.log(data)


  return (
    <div className={styles.container}>
      <Head>
        <title>Miguel Julio, a front-end developer with a flair for design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Miguel Julio</h1>

        <p className={styles.description}>
        a front-end developer with a flair for design
        </p>

        <div className={styles.grid}>
            {Work(data)}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
