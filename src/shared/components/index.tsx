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
    transition: all 0.3s ease-out;

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

export const Pill = styled.strong`
    display: inline-block;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    line-height: 24px;
    font-size: 16px;
    font-weight: 300;
    padding: 0 16px;
    margin: 0 8px 8px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

export const SVG = styled.div`
    width: 100%;

    & svg {
        /* Mobile styles */
        fill: #0c0c0c;
        max-height: 31px;
        width: auto;
        margin: 0 auto;

        /* Desktop styles */
        @media screen and (min-width: 768px) {
            margin: 0 0 0 0;
            max-height: 43px;
        }
    }
`

export interface FitfabProps {
    brandColor?: string
    defaultColor?: string
    width?: string
    height?: string
}
export const Fitfab = (props: FitfabProps) => {
    const {
        brandColor = '#FF4158', // default brand color
        defaultColor = '#ADBBC5', // default color
        height = 43,
        width = 159,
        ...rest
    } = props
    return (
        <svg viewBox="0 0 159 43" height={height} width={width} {...rest}>
            <g fill="none" fillRule="evenodd">
                <path fill={defaultColor} d="M34 .05h39.719v10.606H60.184V43H46.912V10H34z" />
                <path
                    d="M100.486.05H75.643c-4.141 0-7.32 1.026-9.537 3.077-2.216 2.05-3.325 4.59-3.325 7.617 0 2.54.791 4.717 2.373 6.533 1.055 1.211 2.598 2.168 4.63 2.871-3.087.743-5.357 2.017-6.812 3.824-1.455 1.806-2.183 4.077-2.183 6.811 0 2.227.518 4.229 1.553 6.006a11.435 11.435 0 0 0 4.248 4.219c1.113.644 2.793 1.113 5.039 1.406 2.988.39 4.97.586 5.947.586h22.91V.05zM87.098 16.897h-5.772c-2.07 0-3.51-.356-4.321-1.069-.81-.713-1.216-1.743-1.216-3.09 0-1.25.405-2.227 1.216-2.93.81-.703 2.222-1.055 4.233-1.055h5.86v8.144zm0 16.875H80.33c-2.285 0-3.896-.405-4.834-1.215-.937-.81-1.406-1.9-1.406-3.267 0-1.27.464-2.29 1.391-3.061.928-.772 2.554-1.158 4.878-1.158h6.739v8.701zM30.4 17h11.924v26H30.4z"
                    fill={defaultColor}
                />
                <path
                    fill={brandColor}
                    d="M.453.05H34V10H13.783v7h16.64v8.451h-16.64V43H.453zM158.266.05h-32.813V10h19.483v7h-16.641v8.451h16.64V43h13.33z"
                />
                <path
                    d="M126.516 35.91h-15.118l-2.08 7.09H95.754L111.896.05h14.473L142.512 43h-13.887l-2.11-7.09zm-2.784-9.287l-4.746-15.44-4.716 15.44h9.462z"
                    fill={defaultColor}
                />
            </g>
        </svg>
    )
}
