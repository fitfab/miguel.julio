import Head from 'next/head'
import styled from 'styled-components'
import {Main, Container, Footer, Card, Flex} from '../components'
import {useQuery} from '@apollo/client'
import WORK_QUERY from './work.graphql'

const PillView = styled.strong`
  display: inline-block;
  border-radius: 16px;
  background: ${({theme})=> theme.colors.primary};
  color: #fff;
  line-height: 24px;
  font-size: 16px;
  font-weight: 300;
  padding: 0 16px;
  margin: 0 8px 8px 0;
  text-transform: uppercase;
  letter-spacing: .5px;
`

const Pill = (techStacks: [string]) => {
  return techStacks.map((tech, index)=> <PillView key={index} >{tech}</PillView>)
}

const Work = (data: { consultants: any })=> {
  const {consultants} = data
  const search = "https://www.google.com/search?q="
  return consultants[0].work.map((job, index) => (
    <Card href={search+job.name} key={index} target="blank">
      <h2>{job.name} &rarr;</h2>
      <p>{job.description}</p>
      {Pill(job.technology)}
    </Card>
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
    <Container>
      <Head>
        <title>Miguel Julio, a front-end developer with a flair for design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1 >Miguel Julio</h1>

        <p >
        a front-end developer with a flair for design
        </p>

        <Flex>
            {Work(data)}
        </Flex>
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </Footer>
    </Container>
  )
}
