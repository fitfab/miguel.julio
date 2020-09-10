import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        margin-left: 0.5rem; 
        height: 1em;
    }

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Flex = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 960px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
}
`

export const Card = styled.a`
  background: #fff;
  margin: 1rem;
  flex-basis: 420px;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  min-height: 300px;
  transition: all .3s ease-out;

  &:hover,
  &:focus,
  &:active {
    box-shadow: -1px -1px 32px rgba(128, 128, 128, 0.1);
    transform: scale(1.01);
  }

  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 8px;
  }
`
