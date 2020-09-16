import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const assetFix = process.env.NEXT_PUBLIC_BASE_PATH || ''
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href={`${assetFix}/favicon.ico`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
