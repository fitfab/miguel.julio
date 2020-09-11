import Head from 'next/head'
import styled from 'styled-components'
import {Main, Container, Footer, Card, Flex} from '../components'
import {useQuery} from '@apollo/client'
import WORK_QUERY from './work.graphql'

const media = [
  "http://fitfab.com/images/bolivia/1024px-Lomas_de_Arena_-_Santa_Cruz,_Bolivia.jpg",
  "http://fitfab.com/images/bolivia/Cascadas_de_Cuevas_Santa_Cruz_Bolivia.jpg",
  "http://fitfab.com/images/bolivia/Cerro_Chochis_-_Santa_Cruz_-_Bolivia_.png",
  "http://fitfab.com/images/bolivia/NL-Cataratas_Arcoiris_Bolivia.jpg",
  "http://fitfab.com/images/upload/10.JPG",
  "http://fitfab.com/images/upload/12.JPG"
]

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


      <div
        className="addthis_inline_share_toolbox"
        data-title={job.name}
        data-description={job.description}
        data-url={`fitfab.com?q=i`+index}
        data-image={media[index]}
        ></div>
            
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
          href="http://fitfab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          fitfab by miguel julio
        </a>
        {/* AddThis */}
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f5abbea7ec78c38"></script>

      </Footer>
    </Container>
  )
}
